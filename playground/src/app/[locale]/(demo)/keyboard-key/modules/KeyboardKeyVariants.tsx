import type { KbdVariant } from 'skyroc-ui';
import { Kbd } from 'skyroc-ui';

const variants: KbdVariant[] = ['solid', 'outline', 'ghost'];

const KeyboardKeyVariants = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {variants.map(variant => (
        <Kbd
          key={variant}
          value="command"
          variant={variant}
        />
      ))}
    </div>
  );
};

export default KeyboardKeyVariants;
