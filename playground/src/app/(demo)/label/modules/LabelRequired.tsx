import { Input, Label } from 'skyroc-ui';

const LabelRequired = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="username">
        Username
        <span className="text-destructive ml-1">*</span>
      </Label>
      <Input
        id="username"
        placeholder="Enter your username"
        required
      />
    </div>
  );
};

export default LabelRequired;
