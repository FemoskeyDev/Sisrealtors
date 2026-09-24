interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export function SectionLabel({
  children,
  dark = false,
}: SectionLabelProps) {
  return (
    <p
      className={
        dark
          ? "text-xs font-medium uppercase tracking-[0.24em] text-white/50"
          : "text-xs font-medium uppercase tracking-[0.24em] text-black/45"
      }
    >
      {children}
    </p>
  );
}