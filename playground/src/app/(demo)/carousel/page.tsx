import { Card } from 'skyroc-ui';
import CarouselAutoplay from './modules/CarouselAutoplay';
import CarouselBasic from './modules/CarouselBasic';
import CarouselMultiple from './modules/CarouselMultiple';
import CarouselVertical from './modules/CarouselVertical';

const CarouselPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Basic"
      >
        <CarouselBasic />
      </Card>

      <Card
        split
        title="Multiple Items"
      >
        <CarouselMultiple />
      </Card>

      <Card
        split
        title="Autoplay Plugin"
      >
        <CarouselAutoplay />
      </Card>

      <Card
        split
        title="Vertical"
      >
        <CarouselVertical />
      </Card>
    </div>
  );
};

export default CarouselPage;
