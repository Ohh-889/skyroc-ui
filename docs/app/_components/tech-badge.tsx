import { Badge } from 'skyroc-ui';

const techStack = [
  'React 19',
  'TypeScript',
  'Tailwind CSS',
  'Radix UI',
  'Next.js'
];

const TechBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {techStack.map(tech => (
        <Badge
          className="hover:border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300"
          color="secondary"
          key={tech}
          variant="outline"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
};

export default TechBadges;
