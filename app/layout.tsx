import './globals.css';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';

const space_mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bob Moriasi',
  description: "Personal portfolio app",
  applicationName: "Portfolio",
  authors: { name: "Bob Moriasi" },
  keywords: ["Bob", "Moriasi", "Ongare", "Bryson", "personal", "portfolio", "student"],
  robots: { index: true, follow: true },
  icons: [
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  )
}
