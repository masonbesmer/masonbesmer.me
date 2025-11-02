import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mason Besmer",
  description: "Mason Besmer's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-night">
      <body className="bg-night text-gray-100 antialiased m-0 p-0">
        {children}
      </body>
    </html>
  );
}
