import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'ÉLÉGANCE | Luxury Fashion House",
  description: "Exquisite craftsmanship and timeless elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <header className="fixed top-0 w-full z-50 bg-ivory/80 backdrop-blur-md border-b border-charcoal/5 px-6 py-4 flex justify-between items-center">
          <button className="text-charcoal p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <Link href="/">
            <h1 className="text-2xl font-serif tracking-[0.2em] text-charcoal font-bold uppercase">L&apos;ÉLÉGANCE</h1>
          </Link>
          <Link href="/cart" className="text-charcoal p-2 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="absolute top-1 right-1 bg-gold text-[10px] text-white rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </Link>
        </header>

        <main className="pt-20 pb-24 min-h-screen">
          {children}
        </main>

        <Navigation />
      </body>
    </html>
  );
}
