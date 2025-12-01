import { TooltipProvider } from 'skyroc-ui';
import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import TooltipArrow from './modules/TooltipArrow';
import TooltipDemo from './modules/TooltipDemo';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('tooltip');
}

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
