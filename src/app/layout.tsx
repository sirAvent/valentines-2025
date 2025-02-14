import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker-regular",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Valentines 2025",
  description: "Avent to Bonnie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${permanentMarker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
