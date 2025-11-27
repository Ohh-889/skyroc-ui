'use client';

import { toast } from 'skyroc-ui';

const SonnerClient = () => {
  return (
    <div>
      <button
        onClick={() =>
          toast.success('Hello', {
            action: {
              label: 'Click me',
              onClick: () => {
                toast.success('Hello');
              }
            },

            description: 'This is a description',
            duration: 3000
          })}
      >
        Click me
      </button>
    </div>
  );
};

export default SonnerClient;
