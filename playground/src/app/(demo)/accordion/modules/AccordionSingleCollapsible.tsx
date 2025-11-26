import { Accordion } from 'skyroc-ui';
import { items } from './shared';

const AccordionSingleCollapsible = () => {
  return (
    <Accordion
      collapsible
      items={items}
      type="single"
    />
  );
};

export default AccordionSingleCollapsible;
