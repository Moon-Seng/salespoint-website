import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salespoint - Digital Solutions for Modern Businesses",
  description: "Empowering Your Business with Innovative Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
