import { Pause, SkipBack, SkipForward } from 'lucide-react';
import { ButtonIcon } from 'skyroc-ui';

export const ButtonIconBasic = () => {
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

export const ButtonIconFitContent = () => {
  return (
    <div className="gap-12px flex flex-wrap">
      <ButtonIcon className="p-0.5 text-xl">
        <SkipBack />
      </ButtonIcon>

      <ButtonIcon
        fitContent
        className="p-0.5 text-xl"
      >
        <SkipForward />
      </ButtonIcon>

      <ButtonIcon
        fitContent
        className="p-0.5 text-xl"
      >
        <Pause />
      </ButtonIcon>
    </div>
  );
};

const ButtonIconDemo = () => {
  return (
    <div className="flex-c gap-4">
      <ButtonIconBasic />
      <ButtonIconFitContent />
    </div>
  );
};

export default ButtonIconDemo;
