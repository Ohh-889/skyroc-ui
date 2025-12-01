import { Accordion } from 'skyroc-ui';
import { items } from './shared';

const AccordionSlot = () => {
  return (
    <Accordion
      collapsible
      items={items}
      type="single"
    />
  );
};

export default AccordionSlot;
