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
    <html lang="en" style={{ backgroundColor: '#0a0a0f' }}>
      <body style={{ backgroundColor: '#0a0a0f', color: '#f0f0f5', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
