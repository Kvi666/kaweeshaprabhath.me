import "@/app/globals.css";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kanit", // Optional: You can use this to apply the font via CSS variables
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
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
