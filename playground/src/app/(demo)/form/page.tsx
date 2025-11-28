import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import FormBasic from './modules/FormBasic';
import Default from './modules/Default';
import ClearDestroy from './modules/ClearDestroy';
import ComputedDemo from './modules/ComputedDemo';
import CustomValidateMessages from './modules/CustomValidateMessages';
import FieldChange from './modules/FieldChange';
import List from './modules/List';
import Middleware from './modules/Middleware';
import Preserve from './modules/Preserve';
import Reset from './modules/Reset';
import UndoRedo from './modules/UndoRedo';
import UseForm from './modules/UseForm';
import UseSelector from './modules/UseSelector';
import UseWatch from './modules/UseWatch';
import Validate from './modules/validate';
import ValidateWarning from './modules/validateWaring';
import ZodResolver from './modules/ZodResolver';
import AsyncValidatorResolver from './modules/AsyncValidatorResolver';

export const metadata: Metadata = generateComponentMetadata('form');

const FormPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card
        split
        title="Basic"
      >
        <FormBasic />
      </Card>

      <Card
        split
        title="Default Form"
      >
        <Default />
      </Card>

      <Card
        split
        title="Clear on Destroy"
      >
        <ClearDestroy />
      </Card>

      <Card
        split
        title="Computed Field"
      >
        <ComputedDemo />
      </Card>

      <Card
        split
        title="Custom Validate Messages"
      >
        <CustomValidateMessages />
      </Card>

      <Card
        split
        title="Field Change"
      >
        <FieldChange />
      </Card>

      <Card
        split
        title="Form List"
      >
        <List />
      </Card>

      <Card
        split
        title="Middleware"
      >
        <Middleware />
      </Card>

      <Card
        split
        title="Preserve"
      >
        <Preserve />
      </Card>

      <Card
        split
        title="Reset"
      >
        <Reset />
      </Card>

      <Card
        split
        title="Undo/Redo"
      >
        <UndoRedo />
      </Card>

      <Card
        split
        title="Use Form"
      >
        <UseForm />
      </Card>

      <Card
        split
        title="Use Selector"
      >
        <UseSelector />
      </Card>

      <Card
        split
        title="Use Watch"
      >
        <UseWatch />
      </Card>

      <Card
        split
        title="Validate Fields"
      >
        <Validate />
      </Card>

      <Card
        split
        title="Validate Warning"
      >
        <ValidateWarning />
      </Card>

      <Card
        split
        title="Zod Resolver"
      >
        <ZodResolver />
      </Card>

      <Card
        split
        title="Async Validator Resolver"
      >
        <AsyncValidatorResolver />
      </Card>
    </div>
  );
};

export default FormPage;
