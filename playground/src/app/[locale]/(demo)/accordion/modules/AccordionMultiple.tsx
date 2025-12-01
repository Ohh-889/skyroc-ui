import { Accordion } from 'skyroc-ui';
import { items } from './shared';

const AccordionMultiple = () => {
  return (
    <Accordion
      items={items}
      type="multiple"
    />
  );
};

export default AccordionMultiple;
