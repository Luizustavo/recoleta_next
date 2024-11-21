'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as z from 'zod';

const schema = z.object({
  cep: z.string().min(1, { message: 'CEP é obrigatório' }),
  rua: z.string().min(1, { message: 'Rua é obrigatória' }),
  numero: z.string().min(1, { message: 'Número é obrigatório' }),
  bairro: z.string().min(1, { message: 'Bairro é obrigatório' }),
  cidade: z.string().min(1, { message: 'Cidade é obrigatória' }),
  estado: z.string().min(1, { message: 'Estado é obrigatório' }),
  complemento: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

export default function EnderecoCadastro({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) {
  const [endereco, setEndereco] = useState<Schema>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [enderecosCadastrados] = useState([
    {
      id: 1,
      rua: 'Rua das Flores',
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567',
    },
    {
      id: 2,
      rua: 'Avenida Paulista',
      numero: '1000',
      bairro: 'Bela Vista',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01310-100',
    },
  ]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEndereco(prev => ({ ...prev, [name]: value }));
  };

  const handleEstadoChange = (value: string) => {
    setEndereco(prev => ({ ...prev, estado: value }));
  };

  function resetAddress() {
    setEndereco({
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    });
  }

  async function onChangeCep(cep: string) {
    try {
      if (cep.length !== 8) {
        resetAddress();

        return;
      }
      const response = await fetch(`/api/cep?cep=${cep}`);
      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      const data = await response.json();

      setEndereco(prev => ({
        ...prev,
        rua: data.logradouro || '',
        bairro: data.bairro || '',
        cidade: data.localidade || '',
        estado: data.uf || '',
      }));
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = schema.safeParse(endereco);
    if (!result.success) {
      // Armazenar os erros de validação no estado
      const newErrors: { [key: string]: string } = {};
      result.error.errors.forEach(err => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);

      return;
    }

    console.log('Endereço adicionado:', endereco);
    nextStep(); // Avança para o próximo passo
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mb-4">
      <CardHeader>
        <CardTitle>Gerenciamento de Endereços para Coleta</CardTitle>
        <CardDescription>
          Visualize seus endereços cadastrados ou adicione um novo endereço para
          coleta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="cadastrados" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cadastrados">Endereços Cadastrados</TabsTrigger>
            <TabsTrigger value="novo">Novo Endereço</TabsTrigger>
          </TabsList>

          <TabsContent value="cadastrados">
            <form onSubmit={handleSubmit} className="space-y-4">
              {enderecosCadastrados.map(endereco => (
                <Card key={endereco.id}>
                  <CardContent className="pt-6">
                    <p>
                      <strong>Rua:</strong> {endereco.rua}, {endereco.numero}
                    </p>
                    <p>
                      <strong>Bairro:</strong> {endereco.bairro}
                    </p>
                    <p>
                      <strong>Cidade:</strong> {endereco.cidade} -{' '}
                      {endereco.estado}
                    </p>
                    <p>
                      <strong>CEP:</strong> {endereco.cep}
                    </p>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-end gap-4 items-center">
                <Button type="button" onClick={prevStep}>
                  Voltar
                </Button>
                <Button type="submit">Avançar</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="novo">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    name="cep"
                    value={endereco.cep}
                    onChange={handleChange}
                    placeholder="00000-000"
                    onBlur={() => onChangeCep(endereco.cep)} // Chama a API ao perder o foco
                  />
                  {errors.cep && (
                    <p className="text-red-500 text-sm">{errors.cep}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    id="numero"
                    name="numero"
                    value={endereco.numero}
                    onChange={handleChange}
                    placeholder="123"
                  />
                  {errors.numero && (
                    <p className="text-red-500 text-sm">{errors.numero}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rua">Rua/Logradouro</Label>
                <Input
                  id="rua"
                  name="rua"
                  value={endereco.rua}
                  onChange={handleChange}
                  placeholder="Rua das Flores"
                />
                {errors.rua && (
                  <p className="text-red-500 text-sm">{errors.rua}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="complemento">Complemento (opcional)</Label>
                <Input
                  id="complemento"
                  name="complemento"
                  value={endereco.complemento}
                  onChange={handleChange}
                  placeholder="Apto 101"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bairro">Bairro</Label>
                <Input
                  id="bairro"
                  name="bairro"
                  value={endereco.bairro}
                  onChange={handleChange}
                  placeholder="Centro"
                />
                {errors.bairro && (
                  <p className="text-red-500 text-sm">{errors.bairro}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    name="cidade"
                    value={endereco.cidade}
                    onChange={handleChange}
                    placeholder="São Paulo"
                  />
                  {errors.cidade && (
                    <p className="text-red-500 text-sm">{errors.cidade}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select
                    onValueChange={handleEstadoChange}
                    value={endereco.estado}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.estado && (
                    <p className="text-red-500 text-sm">{errors.estado}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4 items-center">
                <Button type="button" onClick={prevStep}>
                  Voltar
                </Button>
                <Button type="submit">Avançar</Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
