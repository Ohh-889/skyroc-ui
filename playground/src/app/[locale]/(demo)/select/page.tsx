import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import AllSeparator from './modules/AllSeparator';
import Default from './modules/Default';
import DefaultValue from './modules/DefaultValue';
import Disabled from './modules/Disabled';
import DisabledOption from './modules/DisabledOption';
import GroupOption from './modules/GroupOption';
import PositionItemAligned from './modules/PositionItemAligned';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('select');
}

const SelectPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Separator"
      >
        <Default />
      </Card>

      <Card
        split
        title="With default value"
      >
        <DefaultValue />
      </Card>

      <Card
        split
        title="Separator"
      >
        <AllSeparator />
      </Card>

      <Card
        split
        title="Group Option"
      >
        <GroupOption />
      </Card>

      <Card
        split
        title="Position Item Aligned"
      >
        <PositionItemAligned />
      </Card>

      <Card
        split
        title="Disabled select"
      >
        <Disabled />
      </Card>

      <Card
        split
        title="Disabled option"
      >
        <DisabledOption />
      </Card>
    </div>
  );
};

export default SelectPage;
