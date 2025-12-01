'use client';

import { Button, FormField, Input, Form, useForm } from 'skyroc-ui';

const FormBasic = () => {
  const [form] = useForm();

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form
      className="w-full max-w-sm space-y-4"
      form={form}
      onFinish={handleSubmit}
    >
      <FormField
        label="Username"
        name="username"
      >
        <Input placeholder="Enter username" />
      </FormField>

      <FormField
        label="Email"
        name="email"
      >
        <Input
          placeholder="Enter email"
          type="email"
        />
      </FormField>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormBasic;
