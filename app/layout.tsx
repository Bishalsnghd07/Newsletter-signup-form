import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Newsletter sign-up form with success message",
  description: "A challenge from Frontend Mentor!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link 
       rel="icon" 
       href="/assets/images/favicon-32x32.png"
       type="image/png" 
       sizes="32x32" 
       />
      </head>
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
