'use client';

import { Button, Form, FormField, FormList, Input, useForm, useUndoRedo } from 'skyroc-ui';

interface Inputs {
  email: string;
  tags: string[];
  username: string;
}

const initialValues: Inputs = {
  email: 'test@example.com',
  tags: ['vue', 'react'],
  username: 'ohh'
};

const UseFormWithUndoRedo = () => {
  const [form] = useForm<Inputs>();

  const undoRedo = useUndoRedo(form);

  function setUsername() {
    form.setFieldValue('username', 'new_user');
  }

  function insertTag() {
    form.arrayOp('tags').insert(1, 'typescript');
  }

  function undo() {
    undoRedo?.undo();
  }

  function redo() {
    undoRedo?.redo();
  }

  return (
    <Form
      className="w-[480px] space-y-4 max-sm:w-full"
      form={form}
      initialValues={initialValues}
    >
      <FormField
        label="Username"
        name="username"
      >
        <Input />
      </FormField>

      <FormField
        label="Email"
        name="email"
      >
        <Input />
      </FormField>

      <FormList
        initialValue={['vue', 'react']}
        name="tags"
      >
        {fields => (
          <div>
            {fields.map(({ key, name }) => (
              <FormField
                key={key}
                label={`Tag ${key}`}
                name={name}
              >
                <Input />
              </FormField>
            ))}
          </div>
        )}
      </FormList>

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          onClick={setUsername}
        >
          Change Username
        </Button>

        <Button
          type="button"
          onClick={insertTag}
        >
          Insert Tag
        </Button>

        <Button
          disabled={!undoRedo?.canUndo}
          type="button"
          onClick={undo}
        >
          Undo
        </Button>

        <Button
          disabled={!undoRedo?.canRedo}
          type="button"
          onClick={redo}
        >
          Redo
        </Button>

        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default UseFormWithUndoRedo;
