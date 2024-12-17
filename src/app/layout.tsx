import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-grad-grey to-black">
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Navbar /> {/* Header */}
          <main className="flex-grow">{children}</main> {/* Content */}
          <Footer /> {/* Footer */}
        </NextThemesProvider>
      </body>
    </html>
  );
}
