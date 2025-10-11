import "@/app/globals.css";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import { Kanit } from "next/font/google";

export const metadata = {
  title: "Kaweesha Prabhath | Portfolio",
  description:
    "Full-stack developer portfolio of Kaweesha Prabhath — showcasing web projects, designs, and creative work.",
  metadataBase: new URL("https://kaweeshaprabhath.me"),
  openGraph: {
    title: "Kaweesha Prabhath | Portfolio",
    description:
      "Full-stack developer portfolio of Kaweesha Prabhath — showcasing web projects, designs, and creative work.",
    url: "https://kaweeshaprabhath.me",
    siteName: "Kaweesha Prabhath Portfolio",
    images: [
      {
        url: "/preview.jpg", 
        width: 1200,
        height: 630,
        alt: "Kaweesha Prabhath Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaweesha Prabhath | Portfolio",
    description:
      "Full-stack developer portfolio of Kaweesha Prabhath — showcasing web projects, designs, and creative work.",
    images: ["/preview.jpg"],
    creator: "@kaweesha", 
  },
};

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kaweesha Prabhath",
              url: "https://kaweeshaprabhath.me",
              image: "https://kaweeshaprabhath.me/dp.webp",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://www.linkedin.com/in/kaweesha-prabhath-989305314/",
                "https://github.com/Kvi666",
              ],
            }),
          }}
        />

        {/* Components */}
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
