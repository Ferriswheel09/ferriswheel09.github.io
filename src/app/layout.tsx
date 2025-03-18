import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-grad-grey to-black">
          <Navbar /> {/* Header */}
          <main className="flex-grow">{children}</main> {/* Content */}
          <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
