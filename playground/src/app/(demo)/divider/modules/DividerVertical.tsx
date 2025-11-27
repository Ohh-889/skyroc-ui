import { Divider } from 'skyroc-ui';

const DividerVertical = () => {
  return (
    <div className="flex h-5 items-center space-x-4">
      <div>Skyroc</div>
      <Divider orientation="vertical" />
      <div>UI</div>
      <Divider orientation="vertical" />
      <div>Vue</div>
    </div>
  );
};

export default DividerVertical;
