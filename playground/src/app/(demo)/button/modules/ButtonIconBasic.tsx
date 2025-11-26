import { Pause, SkipBack, SkipForward } from 'lucide-react';
import { ButtonIcon } from 'skyroc-ui';

const ButtonIconBasic = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      <ButtonIcon>
        <SkipBack />
      </ButtonIcon>

      <ButtonIcon>
        <SkipForward />
      </ButtonIcon>

      <ButtonIcon>
        <Pause />
      </ButtonIcon>
    </div>
  );
};

export default ButtonIconBasic;

