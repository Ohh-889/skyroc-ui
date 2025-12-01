import { Pause, SkipBack, SkipForward } from 'lucide-react';
import { ButtonGroup, ButtonIcon } from 'skyroc-ui';

const ButtonGroupVertical = () => {
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

export default ButtonGroupVertical;
