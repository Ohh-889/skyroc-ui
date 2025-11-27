import { Input } from 'skyroc-ui';

const InputDisabled = () => {
  return (
    <div className="flex w-80 flex-col gap-3 max-sm:w-auto">
      <Input
        disabled
        placeholder="Disabled input"
      />

      <Input
        readOnly
        defaultValue="Readonly input"
      />
    </div>
  );
};

export default InputDisabled;
