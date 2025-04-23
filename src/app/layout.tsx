import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Faris Jiwad",
  description: "Faris Jiwad is a software developer and researcher, always looking to tackle new problems",
  keywords: "Faris Jiwad, Software Engineer, Fullstack, Systems, ML, Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="TmH1wrIYQ4K6GNt0fDj5RDAbhU24kkEHvBLqKps7iC8" />
      </head>
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-grad-grey to-black">
          <Navbar /> {/* Header */}
          <main className="flex-grow">{children}</main> {/* Content */}
          <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
