import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import SliderColor from './modules/SliderColor';
import SliderSize from './modules/SliderSize';
import SliderVertical from './modules/SliderVertical';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('slider');
}

const SliderPage = () => {
  return (
    <div className="flex-c gap-4">
      <SliderColor />
      <SliderVertical />
      <SliderSize />
    </div>
  );
};

export default SliderPage;
