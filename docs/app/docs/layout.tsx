import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="m-auto  flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  );
};

export default DocsLayout;
