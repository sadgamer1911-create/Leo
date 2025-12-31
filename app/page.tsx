import Image from "next/image";
import Link from "next/link";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: "₹1,25,000",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800",
    category: "Evening Wear"
  },
  {
    id: 2,
    name: "Embroidered Velvet Blazer",
    price: "₹85,000",
    image: "https://images.unsplash.com/photo-1594932224010-75f2a77bd56c?auto=format&fit=crop&q=80&w=800",
    category: "Outerwear"
  },
  {
    id: 3,
    name: "Leather Monogram Tote",
    price: "₹2,10,000",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Cashmere Turtleneck",
    price: "₹42,000",
    image: "https://images.unsplash.com/photo-1576871333021-d6226229567c?auto=format&fit=crop&q=80&w=800",
    category: "Knitwear"
  }
];

const COLLECTIONS = [
  {
    name: "Winter 2024",
    description: "The Art of Layering",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Heritage Silk",
    description: "Timeless Craftsmanship",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury Fashion Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <span className="text-gold uppercase tracking-[0.4em] text-sm mb-4 block animate-fade-in">New Arrival</span>
          <h2 className="text-ivory text-5xl md:text-7xl font-serif mb-8 max-w-2xl leading-tight">The Lumina Collection</h2>
          <button className="bg-emerald text-ivory px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-emerald/90 transition-all border border-gold/30">
            Explore Now
          </button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="px-6 space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-gold uppercase tracking-widest text-xs">Curated</span>
            <h3 className="text-3xl font-serif text-charcoal">Collections</h3>
          </div>
          <button className="text-charcoal uppercase tracking-widest text-xs border-b border-charcoal/20 pb-1">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS.map((collection) => (
            <div key={collection.name} className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-sm">
              <Image 
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-10 left-10">
                <h4 className="text-ivory text-3xl font-serif mb-2">{collection.name}</h4>
                <p className="text-ivory/80 uppercase tracking-widest text-xs">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-gold uppercase tracking-widest text-xs">Essential</span>
            <h3 className="text-3xl font-serif text-charcoal">Must-Haves</h3>
          </div>
          <button className="text-charcoal uppercase tracking-widest text-xs border-b border-charcoal/20 pb-1">Shop Now</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {FEATURED_PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group flex flex-col gap-4 cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 text-charcoal/40 hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                </button>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <span className="text-[10px] uppercase tracking-widest text-warm-grey mb-1">{product.category}</span>
                <h5 className="text-charcoal font-medium text-sm mb-1">{product.name}</h5>
                <p className="text-gold font-serif text-sm">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* Brand Ethos */}
      <section className="bg-emerald text-ivory py-24 px-6 text-center space-y-8">
        <h3 className="text-4xl font-serif max-w-2xl mx-auto leading-relaxed">Crafting the Future of Heritage</h3>
        <p className="max-w-xl mx-auto text-ivory/70 leading-loose">
          Every piece in our collection is a testament to the artisans who dedicate their lives to the perfection of a single stitch. We blend centuries-old techniques with modern innovation to create timeless silhouettes.
        </p>
        <button className="border border-gold text-gold px-8 py-3 uppercase tracking-widest text-xs hover:bg-gold hover:text-emerald transition-all">
          Our Craftsmanship
        </button>
      </section>

      {/* Footer Info */}
      <section className="px-6 py-12 border-t border-charcoal/5 grid grid-cols-2 gap-8 text-center">
        <div className="space-y-2">
          <h6 className="uppercase tracking-widest text-[10px] text-warm-grey">Customer Care</h6>
          <p className="text-xs text-charcoal">Concierge Service</p>
        </div>
        <div className="space-y-2">
          <h6 className="uppercase tracking-widest text-[10px] text-warm-grey">Shipping</h6>
          <p className="text-xs text-charcoal">Global White-Glove</p>
        </div>
      </section>
    </div>
  );
}
