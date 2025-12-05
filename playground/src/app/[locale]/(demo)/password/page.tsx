import type { Metadata } from 'next';
import { Card } from 'skyroc-ui';
import { generateComponentMetadata } from '../components-meta';
import PasswordBase from './modules/PasswordBase';
import PasswordClearable from './modules/PasswordClearable';
import PasswordDisabled from './modules/PasswordDisabled';
import PasswordIcon from './modules/PasswordIcon';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('password');
}

const PasswordPage = () => {
  return (
    <div className="flex-c gap-4">
      <Card
        split
        title="Base"
      >
        <PasswordBase />
      </Card>

      <Card
        split
        title="Disabled"
      >
        <PasswordDisabled />
      </Card>

      <Card
        split
        title="Clearable"
      >
        <PasswordClearable />
      </Card>

      <Card
        split
        title="Icon"
      >
        <PasswordIcon />
      </Card>
    </div>
  );
};

export default PasswordPage;
