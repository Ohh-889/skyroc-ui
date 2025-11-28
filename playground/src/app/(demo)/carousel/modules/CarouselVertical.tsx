'use client';
import { Card, Carousel } from 'skyroc-ui';

const CarouselVertical = () => {
  return (
    <div className="px-10">
      <Carousel
        classNames={{ content: 'h-[200px]', item: 'md:basis-1/2' }}
        counts={10}
        opts={{ loop: true }}
        orientation="vertical"
      >
        {index => (
          <Card className="size-full">
            <div className="flex-center size-full">{index + 1}</div>
          </Card>
        )}
      </Carousel>
    </div>
  );
};

export default CarouselVertical;
