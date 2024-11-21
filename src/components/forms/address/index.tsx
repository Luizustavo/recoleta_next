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

export default function EnderecoCadastro({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Endereço adicionado.');
    nextStep(); // Avança para o próximo passo
  };
  const [endereco, setEndereco] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [enderecosCadastrados, setEnderecosCadastrados] = useState([
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
  console.log(setEnderecosCadastrados);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEndereco(prev => ({ ...prev, [name]: value }));
  };

  const handleEstadoChange = (value: string) => {
    setEndereco(prev => ({ ...prev, estado: value }));
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
                {' '}
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
                  />
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
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select
                    onValueChange={handleEstadoChange}
                    value={endereco.estado}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">Acre</SelectItem>
                      <SelectItem value="AL">Alagoas</SelectItem>
                      {/* Adicione os outros estados aqui */}
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="TO">Tocantins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end items-center"> </div>
              <div className="flex justify-end gap-4 items-center">
                {' '}
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
