import { Pause, SkipBack, SkipForward } from 'lucide-react';
import { Button, ButtonGroup, ButtonIcon } from 'skyroc-ui';

export const ButtonGroupHorizontal = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      <ButtonGroup>
        <Button variant="outline">
          <SkipBack />
        </Button>

        <Button variant="outline">
          <Pause />
        </Button>

        <Button variant="outline">
          <SkipForward />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button
          color="destructive"
          variant="outline"
        >
          <SkipBack />
        </Button>

        <Button
          color="destructive"
          variant="outline"
        >
          <SkipForward />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const ButtonGroupVertical = () => {
  return (
    <div className="w-[100px]">
      <ButtonGroup orientation="vertical">
        <ButtonIcon variant="dashed">
          <SkipBack />
        </ButtonIcon>

        <ButtonIcon variant="dashed">
          <Pause />
        </ButtonIcon>

        <ButtonIcon variant="dashed">
          <SkipForward />
        </ButtonIcon>
      </ButtonGroup>
    </div>
  );
};

const ButtonGroupDemo = () => {
  return (
    <div className="flex gap-4">
      <ButtonGroupHorizontal />
      <ButtonGroupVertical />
    </div>
  );
};

export default ButtonGroupDemo;
