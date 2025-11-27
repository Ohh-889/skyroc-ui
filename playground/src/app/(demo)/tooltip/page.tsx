import type { Metadata } from 'next';
import { TooltipProvider } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import TooltipArrow from './modules/TooltipArrow';
import TooltipDemo from './modules/TooltipDemo';

export const metadata: Metadata = generateComponentMetadata('tooltip');

const TooltipPage = () => {
  return (
    <div className="flex-c gap-4">
      <TooltipProvider>
        <TooltipDemo />
        <TooltipArrow />
      </TooltipProvider>
    </div>
  );
};

export default TooltipPage;
