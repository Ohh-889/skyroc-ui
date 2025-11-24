import RadioLabel from '../label/Label';
import RadioGroupItem from './RadioGroupItem';
import RadioIndicator from './RadioIndicator';
import RadioRoot from './RadioRoot';
import type { RadioProps } from './types';

const Radio = (props: RadioProps) => {
  const { className, classNames, color, id, label, size, value, ...rest } = props;

  return (
    <RadioRoot
      className={className || classNames?.root}
      size={size}
    >
      <RadioGroupItem
        color={color}
        id={id || value}
        value={value}
        {...rest}
        size={size}
      >
        <RadioIndicator
          className={classNames?.indicator}
          color={color}
        />
      </RadioGroupItem>

      {label
        ? (
          <RadioLabel
            className={classNames?.label}
            htmlFor={id || value}
            size={size}
          >
            {label}
          </RadioLabel>
        )
        : null}
    </RadioRoot>
  );
};

export default Radio;
