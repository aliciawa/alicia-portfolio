import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alicia Wang | Portfolio",
  description: "Alicia Wang — Frontend / Full Stack Developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
