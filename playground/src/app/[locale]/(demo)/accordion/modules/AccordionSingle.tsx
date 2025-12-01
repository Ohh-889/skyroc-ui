import { Accordion } from 'skyroc-ui';
import { items } from './shared';

const AccordionSingle = () => {
  return (
    <Accordion
      items={items}
      type="single"
    />
  );
};

export default AccordionSingle;
