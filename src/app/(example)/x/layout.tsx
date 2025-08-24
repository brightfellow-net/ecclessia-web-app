export default function SampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      henlo
      <br />
      {children}
    </>
  );
}
