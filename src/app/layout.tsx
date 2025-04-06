import "@/app/globals.css";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <div className="fixed w-full z-50">
          <Header />
        </div>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
