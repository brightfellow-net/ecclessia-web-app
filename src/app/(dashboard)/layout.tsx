"use client";

import AppTheme from "@/components/theme/AppTheme";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppTheme>{children}</AppTheme>;
}
