import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Moon Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body xzendevx-verson="0.0.0_NOTUPDATED">
        <ld-root>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ld-root>
      </body>
    </html>
  );
}
