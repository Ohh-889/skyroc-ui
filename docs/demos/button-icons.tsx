import { Button } from '@/components/button';

const Demo = () => {
  return (
    <div className="flex gap-4">
      <Button>📧 Login with Email</Button>
      <Button variant="outline">⬇️ Download</Button>
      <Button>Get Started →</Button>
    </div>
  );
};

export default Demo;
