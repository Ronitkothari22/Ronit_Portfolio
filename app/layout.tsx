import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronit Kothari | Portfolio",
  description: "AI Engineer & Full Stack Developer from India building AI products, systems, and experiences that matter."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
