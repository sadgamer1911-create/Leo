import Image from "next/image";
import Link from "next/link";

const COLLECTIONS = [
  {
    name: "Winter 2024",
    title: "The Art of Layering",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    count: "42 Pieces"
  },
  {
    name: "Heritage Silk",
    title: "Timeless Craftsmanship",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200",
    count: "18 Pieces"
  },
  {
    name: "Cruise 2025",
    title: "Mediterranean Escape",
    image: "https://images.unsplash.com/photo-1539109136881-3be0610cac48?auto=format&fit=crop&q=80&w=1200",
    count: "35 Pieces"
  }
];

export default function CollectionsPage() {
  return (
    <div className="px-6 py-12 flex flex-col gap-12">
      <div className="text-center space-y-4">
        <span className="text-gold uppercase tracking-[0.4em] text-xs">Explore Our</span>
        <h1 className="text-5xl font-serif text-charcoal">World of Collections</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COLLECTIONS.map((collection) => (
          <Link key={collection.name} href="#" className="group relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image 
              src={collection.image}
              alt={collection.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-12 left-10 right-10">
               <span className="text-gold uppercase tracking-[0.2em] text-[10px] mb-2 block">{collection.count}</span>
               <h2 className="text-ivory text-3xl font-serif mb-2">{collection.name}</h2>
               <p className="text-ivory/60 uppercase tracking-widest text-[10px]">{collection.title}</p>
            </div>
            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-all duration-500">
               <div className="w-10 h-10 border border-ivory/30 flex items-center justify-center rounded-full text-ivory">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
               </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
