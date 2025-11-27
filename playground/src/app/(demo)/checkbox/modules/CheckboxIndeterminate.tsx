import { Checkbox } from 'skyroc-ui';

const CheckboxIndeterminate = () => {
  return (
    <div className="flex flex-wrap gap-[12px]">
      <Checkbox
        checked={false}
        id="unchecked"
      >
        Unchecked
      </Checkbox>

      <Checkbox
        checked="indeterminate"
        id="indeterminate"
      >
        Indeterminate
      </Checkbox>

      <Checkbox
        defaultChecked
        id="checked"
      >
        Checked
      </Checkbox>
    </div>
  );
};

export default CheckboxIndeterminate;
