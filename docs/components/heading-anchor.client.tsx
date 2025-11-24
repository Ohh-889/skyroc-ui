'use client';

import { Link } from 'lucide-react';

export const HeadingAnchor = ({ id }: { id: string }) => {
  const handleClick = () => {
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.pushState({}, '', url);
    navigator.clipboard.writeText(url.href);
  };

  return (
    <a
      aria-label={`链接到 ${id}`}
      className="ml-2 inline-flex items-center opacity-0 transition-opacity group-hover:opacity-100"
      href={`#${id}`}
      onClick={handleClick}
    >
      <Link className="text-muted-foreground size-4 transition-colors hover:text-[hsl(237,100%,70%)]" />
    </a>
  );
};
