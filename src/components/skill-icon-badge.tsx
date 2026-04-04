type SkillIconBadgeProps = {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>;
};

export default function SkillIconBadge({ name, Icon }: SkillIconBadgeProps) {
  return (
    <div className="group relative">
      <div className="border-dashed border bg-background border-border hover:border-muted-foreground/60 transition duration-150 ring-2 ring-border/20 rounded-xl h-13 w-13 flex items-center justify-center overflow-visible">
        {Icon && (
          <Icon className="size-8 shrink-0 rounded overflow-visible object-contain text-foreground" />
        )}
      </div>
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 opacity-0 translate-y-2 scale-95 group-hover:-translate-y-5 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-20">
        <span className="whitespace-nowrap rounded-md border border-border bg-background/95 px-2 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
          {name}
        </span>
      </div>
    </div>
  );
}
