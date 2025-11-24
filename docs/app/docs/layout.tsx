import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="max-w-4xl flex-1 px-6 py-8 md:px-12 md:py-12">{children}</main>
      </div>
    </div>
  );
};

export default DocsLayout;
