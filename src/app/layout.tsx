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
      <body>
        <Navbar />
        <div className="pt-32 bg-neutral-400">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
