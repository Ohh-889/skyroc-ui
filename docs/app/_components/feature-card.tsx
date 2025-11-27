interface FeatureCardProps {
  description: string;
  icon: React.ReactNode;
  title: string;
}

const FeatureCard = ({ description, icon, title }: FeatureCardProps) => {
  return (
    <div className="group border-border bg-card hover:border-primary/30 relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      {/* 图标 */}
      <div className="bg-primary/10 text-primary mb-4 flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      {/* Hover 光效 */}
      <div className="from-primary pointer-events-none absolute -top-16 -right-16 size-32 rounded-full bg-linear-to-br to-transparent opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" />
    </div>
  );
};

export default FeatureCard;
