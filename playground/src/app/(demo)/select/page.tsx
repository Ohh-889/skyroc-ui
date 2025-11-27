import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import AllSeparator from './modules/AllSeparator';

export const metadata: Metadata = generateComponentMetadata('select');
import Default from './modules/Default';
import DefaultValue from './modules/DefaultValue';
import Disabled from './modules/Disabled';
import DisabledOption from './modules/DisabledOption';
import GroupOption from './modules/GroupOption';
import PositionItemAligned from './modules/PositionItemAligned';

const SelectPage = () => {
  return (
    <div className="flex-c gap-4">
      <Default />
      <DefaultValue />
      <AllSeparator />
      <GroupOption />
      <PositionItemAligned />
      <Disabled />
      <DisabledOption />
    </div>
  );
};

export default SelectPage;
