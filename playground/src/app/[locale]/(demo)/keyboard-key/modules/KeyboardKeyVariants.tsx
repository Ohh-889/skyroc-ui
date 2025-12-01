import type { KeyboardKeyVariant } from 'skyroc-ui';
import { KeyboardKey } from 'skyroc-ui';

const variants: KeyboardKeyVariant[] = ['solid', 'outline', 'ghost'];

const KeyboardKeyVariantsDemo = () => {
  return (
    <div className="flex-c gap-2">
      {variants.map(variant => (
        <div
          className="flex-c"
          key={variant}
        >
          <div>{variant}</div>

          <div className="flex items-end gap-2">
            <KeyboardKey
              size="sm"
              value="K"
              variant={variant}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyboardKeyVariantsDemo;
