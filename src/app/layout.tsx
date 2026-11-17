import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neighbor Houses - Luxury Smart Living & Architecture",
  description: "ผู้นำด้านการออกแบบและติดตั้งระบบบ้านอัจฉริยะ (Luxury Smart Home) สำหรับคฤหาสน์และที่อยู่อาศัยระดับพรีเมียม",
  generator: "Next.js",
  applicationName: "Neighbor Houses",
  keywords: ["luxury smart home", "home automation", "smart lighting", "security system", "cctv 4k", "ติดตั้ง smart home", "บ้านอัจฉริยะ"],
  authors: [{ name: "Neighbor Houses Thailand" }],
  creator: "Neighbor Houses Thailand",
  publisher: "Neighbor Houses Thailand",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chutchawangit.github.io/neighborhouses-website/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Neighbor Houses - Luxury Smart Living & Architecture",
    description: "บริการออกแบบและติดตั้งระบบ Smart Home ระดับลักชัวรี ครบวงจร ด้วยมาตรฐานวิศวกรรมระดับสากล",
    url: 'https://chutchawangit.github.io/neighborhouses-website/',
    siteName: 'Neighbor Houses',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Neighbor Houses - Luxury Smart Living & Architecture",
    description: "บริการออกแบบและติดตั้งระบบ Smart Home ระดับลักชัวรี ครบวงจร ด้วยมาตรฐานวิศวกรรมระดับสากล",
  },
  icons: {
    icon: [
      { url: '/neighborhouses-website/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
