import "@/app/globals.css";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import { Kanit } from "next/font/google";
import Head from "next/head";

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Head>
        <title>Kaweesha Prabhath | Portfolio</title>
      </Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kaweesha Prabhath",
              "url": "https://www.kaweeshaprabhath.me",
              "image": "https://www.kaweeshaprabhath.me/dp.webp",
              "jobTitle": "Software Engineer",
              "sameAs": [
                "https://www.linkedin.com/in/kaweesha-prabhath-989305314/",
                "https://github.com/Kvi666"
              ]
            }),
          }}
        />
      </head>
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
