import { KeyboardKey } from 'skyroc-ui';

const KeyboardKeyDemo = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <KeyboardKey
        value={['command', 'k']}
        variant="solid"
      />

      <KeyboardKey
        value={['shift', 's']}
        variant="outline"
      />

      <KeyboardKey
        value={['ctrl', 'alt', 'a']}
        variant="ghost"
      />
    </div>
  );
};

export default KeyboardKeyDemo;
