import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export async function GET(request: NextRequest) {
  const cep = request.nextUrl.searchParams.get('cep');

  if (!cep || cep.length !== 8) {
    return NextResponse.json({ message: 'CEP inválido' }, { status: 400 });
  }

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!response.ok) {
    return NextResponse.json(
      { message: 'Erro ao buscar o CEP' },
      { status: 500 }
    );
  }

  const data: ViaCepResponse = await response.json();

  if (data.erro) {
    return NextResponse.json(
      { message: 'CEP não encontrado' },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
