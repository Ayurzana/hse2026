import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hydroscience and Engineering 2026",
  description:
    "International Conference on Freshwater Resources and Environmental Sustainability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}