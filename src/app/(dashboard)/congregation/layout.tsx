import Navbar from "@/components/layout/header/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar
          title="Dashboard"
          items={[
            {
              title: "Congregation",
              href: "/congregation",
            },
          ]}
        />
      </header>
      <main>{children}</main>
      <footer>foot</footer>
    </>
  );
}
