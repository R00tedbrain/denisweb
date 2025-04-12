export default function ParaQuienLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-16 bg-primary w-full">
      {children}
    </div>
  );
} 