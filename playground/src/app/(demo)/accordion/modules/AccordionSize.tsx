import { Card } from 'skyroc-ui';
import { Accordion } from 'skyroc-ui';
import { items, sizes } from './shared';

const AccordionSize = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {sizes.map(size => (
        <Card
          split
          className="basis-[48%] max-sm:basis-[100%]"
          key={size}
          title={size}
        >
          <Accordion
            collapsible
            items={items}
            size={size}
            type="single"
          />
        </Card>
      ))}
    </div>
  );
};

export default AccordionSize;
