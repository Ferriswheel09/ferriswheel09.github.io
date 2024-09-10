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
      <body className="bg-gradient-to-r from-grad-grey to-black">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
