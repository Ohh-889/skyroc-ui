import { Arrow } from 'skyroc-ui';

const ArrowDemo = () => {
  return (
    <>
      <Arrow
        className="fill-popover stroke-border "
        height={12}
        width={24}
      />

      <Arrow
        className="fill-popover-foreground "
        height={12}
        width={24}
      />
    </>
  );
};

export default ArrowDemo;
