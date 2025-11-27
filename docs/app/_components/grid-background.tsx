'use client';

const GridBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 动态网格线 */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* 主渐变光晕 - 顶部 */}
      <div className="from-primary absolute -top-[400px] left-1/2 size-[800px] -translate-x-1/2 rounded-full bg-linear-to-b to-transparent opacity-[0.12] blur-[120px] dark:opacity-[0.2]" />
      {/* 侧边光晕 */}
      <div className="absolute top-1/3 -left-40 size-[500px] rounded-full bg-purple-500 opacity-[0.06] blur-[100px] dark:opacity-[0.1]" />
      <div className="absolute top-2/3 -right-40 size-[500px] rounded-full bg-cyan-500 opacity-[0.05] blur-[80px] dark:opacity-[0.08]" />

      {/* 动态星点 */}
      <div
        className="bg-primary absolute top-[20%] left-[10%] size-1 animate-pulse rounded-full opacity-60"
        style={{ animationDelay: '0s' }}
      />

      <div
        className="bg-primary absolute top-[45%] left-[25%] size-1 animate-pulse rounded-full opacity-60"
        style={{ animationDelay: '0.5s' }}
      />

      <div
        className="bg-primary absolute top-[30%] left-[70%] size-1 animate-pulse rounded-full opacity-60"
        style={{ animationDelay: '1s' }}
      />

      <div
        className="bg-primary absolute top-[60%] left-[85%] size-1 animate-pulse rounded-full opacity-60"
        style={{ animationDelay: '1.5s' }}
      />
    </div>
  );
};

export default GridBackground;
