import { KeyboardKeyGroup } from 'skyroc-ui';

const KeyboardKeyGroupDemo = () => {
  return (
    <div className="flex-c gap-2">
      <KeyboardKeyGroup
        values={['command', 'shift', 'alt']}
        variant="solid"
      />

      <KeyboardKeyGroup
        separator="-"
        values={['command', 'shift', 'alt']}
        variant="outline"
      />

      <KeyboardKeyGroup
        separator=" "
        values={['command', 'shift', 'alt']}
        variant="ghost"
      />
    </div>
  );
};

export default KeyboardKeyGroupDemo;
