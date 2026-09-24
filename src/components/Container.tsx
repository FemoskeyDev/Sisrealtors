interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--page-gutter)] ${className}`}
    >
      {children}
    </div>
  );
}