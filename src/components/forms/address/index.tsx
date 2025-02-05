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
import { getAddress, createAddress } from '@/app/utils/address';
import { useEffect } from 'react';
import { Address } from '@/app/types/api-related-types';
import { useAuth } from '@/hooks/use-auth';
import { v4 as uuidv4 } from 'uuid';

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

export default function AddressRegister({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) {
  const [address, setAddress] = useState<Schema>({
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '',
  });

  const [registeredAddresses, setregisteredAddresses] = useState<Address[]>([]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { accessToken } = useAuth();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleEstadoChange = (value: string) => {
    setAddress(prev => ({ ...prev, estado: value }));
  };

  function resetAddress() {
    setAddress({
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

      setAddress(prev => ({
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

    const result = schema.safeParse(address);
    if (!result.success) {
      // Armazenar os erros de validação no estado
      const newErrors: { [key: string]: string } = {};
      result.error.errors.forEach(err => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);

      return;
    }

    console.log('Endereço adicionado:', address);
    nextStep(); // Avança para o próximo passo
  };

  useEffect(() => {
    async function fetchData() {
      if (accessToken) {
        const dataAddress = await getAddress(accessToken);
        setregisteredAddresses(dataAddress);
      } else {
        console.error('Access token is null');
      }
    }
    fetchData();
  }, [accessToken]);

  const handleSaveAddress = async () => {
    try {
      const result = schema.safeParse(address);
      if (!result.success) {
        const newErrors: { [key: string]: string } = {};
        result.error.errors.forEach(err => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);

        return;
      }

      if (accessToken) {
        const addressToSave: Address = {
          userId: uuidv4(),
          state: address.estado,
          city: address.cidade,
          street: address.rua,
          number: address.numero,
          neighborhood: address.bairro,
          postalCode: address.cep,
          complement: address.complemento || '',
        };
        await createAddress(addressToSave, accessToken);
        const dataAddress = await getAddress(accessToken);
        setregisteredAddresses(dataAddress);
        resetAddress();
        nextStep();
      } else {
        console.error('Access token is null');
      }
    } catch (error) {
      console.error('Erro ao salvar o endereço:', error);
    }
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
              {registeredAddresses.map(address => (
                <Card key={address.userId}>
                  <CardContent className="pt-6">
                    <p>
                      <strong>Rua:</strong> {address.street}, {address.number}
                    </p>
                    <p>
                      <strong>Bairro:</strong> {address.neighborhood}
                    </p>
                    <p>
                      <strong>Cidade:</strong> {address.city} - {address.state}
                    </p>
                    <p>
                      <strong>CEP:</strong> {address.postalCode}
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
                    value={address.cep}
                    onChange={handleChange}
                    placeholder="00000-000"
                    onBlur={() => onChangeCep(address.cep)} // Chama a API ao perder o foco
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
                    value={address.numero}
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
                  value={address.rua}
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
                  value={address.complemento}
                  onChange={handleChange}
                  placeholder="Apto 101"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bairro">Bairro</Label>
                <Input
                  id="bairro"
                  name="bairro"
                  value={address.bairro}
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
                    value={address.cidade}
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
                    value={address.estado}
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
                <Button type="button" onClick={handleSaveAddress}>
                  Cadastrar
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
