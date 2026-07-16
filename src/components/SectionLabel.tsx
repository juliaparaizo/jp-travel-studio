const headingFont = {
  fontFamily: "var(--font-zt-bros-oskon-90s)",
  fontWeight: 400,
} as const;

export default function SectionLabel({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-xs tracking-[0.2em] text-[var(--foreground)]/50">
        {String(number).padStart(2, "0")}
      </span>
      <span className="h-px flex-1 bg-[var(--foreground)]/15" />
      <h2 className="text-2xl sm:text-3xl" style={headingFont}>
        {children}
      </h2>
      <span className="hidden h-px flex-1 bg-[var(--foreground)]/15 sm:block" />
    </div>
  );
}
