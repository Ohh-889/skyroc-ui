const stats = [
  { label: '精选组件', value: '50+' },
  { label: 'TypeScript', value: '100%' },
  { label: '零依赖', value: '轻量' },
  { label: '无障碍', value: 'A11y' }
];

const Stats = () => {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          className="group text-center"
          key={index}
        >
          <div className="from-primary to-primary bg-gradient-to-r via-purple-500 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 md:text-4xl">
            {stat.value}
          </div>

          <div className="text-muted-foreground mt-1 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
