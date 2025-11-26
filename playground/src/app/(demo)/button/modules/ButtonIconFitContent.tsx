import { Pause, SkipBack, SkipForward } from 'lucide-react';
import { ButtonIcon } from 'skyroc-ui';

const ButtonIconFitContent = () => {
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

export default ButtonIconFitContent;

