'use client';
import { Card, Carousel } from 'skyroc-ui';

const CarouselBasic = () => {
  return (
    <div className="px-10">
      <Carousel
        classNames={{ item: 'h-[100px] md:basis-1/4 lg:basis-1/5' }}
        counts={10}
        opts={{ loop: true }}
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

export default CarouselBasic;
