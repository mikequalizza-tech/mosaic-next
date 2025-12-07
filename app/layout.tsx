import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tCredex Admin Console",
  description: "Admin Console for tCredex.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
