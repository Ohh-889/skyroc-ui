import { Accordion } from 'skyroc-ui';
import { items } from './shared';

const AccordionCustom = () => {
  return (
    <Accordion
      collapsible
      items={items}
      type="single"
      classNames={{
        content: 'px-3 leading-8',
        item: 'border-b-0',
        trigger: `mb-2 rounded-md px-3 text-left underline-offset-2 data-[state=closed]:(bg-muted/50 no-underline) data-[state=open]:(bg-secondary-foreground/20 underline hover:bg-secondary-foreground/20 hover:underline) hover:bg-muted`
      }}
    />
  );
};

export default AccordionCustom;
