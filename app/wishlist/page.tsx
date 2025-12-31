import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="px-6 py-12 flex flex-col gap-8 items-center justify-center min-h-[60vh]">
       <h1 className="text-3xl font-serif text-charcoal">Your Wishlist</h1>
       <p className="text-warm-grey text-sm tracking-widest uppercase text-center">Your curated selection is currently empty.</p>
       <Link href="/collections" className="bg-emerald text-ivory px-8 py-3 uppercase tracking-widest text-xs hover:bg-emerald/90 transition-all">
         Explore Collections
       </Link>
    </div>
  );
}
