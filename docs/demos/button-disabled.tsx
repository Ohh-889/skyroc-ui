import { Button } from '@/components/button';

const Demo = () => {
  return (
    <div className="flex gap-4">
      <Button disabled>Disabled Button</Button>

      <Button
        disabled
      >
        Disabled Primary
      </Button>

      <Button
        disabled
        variant="outline"
      >
        Disabled Outline
      </Button>
    </div>
  );
};

export default Demo;
