import type { Metadata } from "next";
import "./globals.css";
import { BodyFont } from "./fonts";


export const metadata: Metadata = {
  title: "Cube Moment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BodyFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
