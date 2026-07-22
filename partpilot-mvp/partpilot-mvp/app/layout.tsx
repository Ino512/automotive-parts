import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PartPilot | Auto parts comparison",
  description: "Compare compatible automotive parts by estimated delivered price in Canada.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
