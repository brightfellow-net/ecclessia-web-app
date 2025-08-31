import Navbar from "@/components/layout/header/Navbar";

export default function CongregationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar title="Congregation" />
      </header>
      <main className="min-h-[90vh]">{children}</main>
      <footer className="">foot</footer>
    </>
  );
}
