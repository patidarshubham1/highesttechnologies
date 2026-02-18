import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Highest Technologies | SEO & Digital Marketing Services",
  description:
    "Highest Technologies delivers SEO and digital marketing services for growing brands.",
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
