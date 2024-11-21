import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function HelpButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 rounded-full"
          >
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Clique nos pins no mapa para ver detalhes.</p>
          <p>Use os filtros para refinar sua busca.</p>
          <p>Alterne entre visualização de mapa e lista.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
