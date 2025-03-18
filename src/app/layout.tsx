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
  title: "NeighborHouses",
  description: "บริการติดตั้ง Smart Home ครบวงจร ด้วยแพ็คเกจที่เหมาะกับบ้านของคุณ",
  generator: "Next.js",
  applicationName: "Smart Home Packages",
  keywords: ["smart home", "home automation", "smart lighting", "security system", "ติดตั้ง smart home", "บ้านอัจฉริยะ"],
  authors: [{ name: "Smart Home Thailand" }],
  creator: "Smart Home Thailand",
  publisher: "Smart Home Thailand",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://smarthome.th'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Smart Home Packages - ติดตั้ง Smart Home",
    description: "บริการติดตั้ง Smart Home ครบวงจร ด้วยแพ็คเกจที่เหมาะกับบ้านของคุณ",
    url: 'https://smarthome.th',
    siteName: 'Smart Home Packages',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Home Packages - ติดตั้ง Smart Home",
    description: "บริการติดตั้ง Smart Home ครบวงจร ด้วยแพ็คเกจที่เหมาะกับบ้านของคุณ",
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
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
