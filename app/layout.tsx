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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var savedTheme = window.localStorage.getItem("highest-technologies-theme");
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var theme = savedTheme === "dark" || savedTheme === "light"
                  ? savedTheme
                  : prefersDark
                    ? "dark"
                    : "light";
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
