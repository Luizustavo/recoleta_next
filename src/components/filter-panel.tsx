import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterPanelProps {
  filters: {
    maxDistance: number;
    types: string[];
    partner: string;
    status: string;
  };
  onFilterChange: (filters: FilterPanelProps['filters']) => void;
}

export default function FilterPanel({
  filters,
  onFilterChange,
}: FilterPanelProps) {
  const handleMaxDistanceChange = (value: number[]) => {
    onFilterChange({ ...filters, maxDistance: value[0] });
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked
      ? [...filters.types, type]
      : filters.types.filter(t => t !== type);
    onFilterChange({ ...filters, types: newTypes });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Distância Máxima: {filters.maxDistance} km</Label>
        <Slider
          value={[filters.maxDistance]}
          onValueChange={handleMaxDistanceChange}
          max={50}
          step={1}
        />
      </div>
      <div>
        <Label>Tipo de Resíduo</Label>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox
              id="reciclavel"
              onCheckedChange={checked =>
                handleTypeChange('Reciclável', checked as boolean)
              }
            />
            <label htmlFor="reciclavel" className="ml-2">
              Reciclável
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="eletronico"
              onCheckedChange={checked =>
                handleTypeChange('Eletrônico', checked as boolean)
              }
            />
            <label htmlFor="eletronico" className="ml-2">
              Eletrônico
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="perigoso"
              onCheckedChange={checked =>
                handleTypeChange('Perigoso', checked as boolean)
              }
            />
            <label htmlFor="perigoso" className="ml-2">
              Perigoso
            </label>
          </div>
        </div>
      </div>
      <div>
        <Label>Parceiro</Label>
        <Select
          onValueChange={value =>
            onFilterChange({ ...filters, partner: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione um parceiro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="EcoRecycle">EcoRecycle</SelectItem>
            <SelectItem value="GreenTech">GreenTech</SelectItem>
            <SelectItem value="SafeDisposal">SafeDisposal</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Status da Coleta</Label>
        <Select
          onValueChange={value => onFilterChange({ ...filters, status: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione um status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Disponível</SelectItem>
            <SelectItem value="in_progress">Em Andamento</SelectItem>
            <SelectItem value="completed">Finalizada</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
