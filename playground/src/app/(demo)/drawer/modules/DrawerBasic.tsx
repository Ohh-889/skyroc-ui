import { Button, Drawer, DrawerClose } from 'skyroc-ui';

const DrawerBasic = () => {
  return (
    <Drawer
      showClose
      title="Drawer Title"
      trigger={<Button variant="outline">Open Drawer</Button>}
      classNames={{
        contentBody: 'mx-auto max-w-sm w-full'
      }}
      footer={(
        <>
          <DrawerClose asChild>
            <Button variant="plain">Cancel</Button>
          </DrawerClose>

          <Button>Submit</Button>
        </>
      )}
    >
      <p>
        This is a basic drawer with a title and description.
      </p>
    </Drawer>
  );
};

export default DrawerBasic;
