"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed bottom-0 w-full z-50 bg-emerald text-ivory px-8 py-4 flex justify-between items-center border-t border-gold/20">
        <NavButton href="/" icon={<HomeIcon />} label="Home" active={pathname === "/"} />
        <NavButton href="/collections" icon={<CollectionIcon />} label="Collections" active={pathname === "/collections"} />
        <NavButton href="/wishlist" icon={<HeartIcon />} label="Wishlist" active={pathname === "/wishlist"} />
        <NavButton href="/profile" icon={<UserIcon />} label="Profile" active={pathname === "/profile"} />
      </nav>

      <button className="fixed bottom-24 right-6 z-40 bg-gold text-emerald w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"></path><path d="M14.5 9h-5"></path><path d="M14.5 12h-5"></path><path d="M11.5 15h-2"></path></svg>
        <span className="absolute right-16 bg-ivory text-charcoal text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-gold/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Virtual Stylist</span>
      </button>
    </>
  );
}

function NavButton({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-gold' : 'text-ivory/60 hover:text-ivory'}`}>
      {icon}
      <span className="text-[10px] uppercase tracking-widest font-medium">{label}</span>
    </Link>
  );
}

function HomeIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
}

function CollectionIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
}

function HeartIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>;
}

function UserIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
}
