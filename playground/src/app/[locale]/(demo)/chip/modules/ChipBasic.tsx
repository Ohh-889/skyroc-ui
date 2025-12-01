import { Button, Chip } from 'skyroc-ui';

const ChipBasic = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip>
        <Button variant="dashed">Dot</Button>
      </Chip>

      <Chip content="5">
        <Button variant="dashed">Count</Button>
      </Chip>

      <Chip content="99+">
        <Button variant="dashed">Max</Button>
      </Chip>
    </div>
  );
};

export default ChipBasic;
