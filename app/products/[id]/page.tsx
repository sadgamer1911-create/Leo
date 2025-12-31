import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: "₹1,25,000",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1200",
    category: "Evening Wear",
    description: "An ethereal silhouette crafted from the finest mulberry silk. This evening gown features a delicate hand-draped bodice and a sweeping train that moves with grace and intention. Perfect for the most prestigious gala events.",
    details: [
      "100% Mulberry Silk",
      "Hand-finished seams",
      "Invisible back zip closure",
      "Silk lining",
      "Made in Italy"
    ],
    measurements: "Model is 178cm and wearing size 38"
  },
  // ... adding more for completeness
];

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === parseInt(id)) || PRODUCTS[0];

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Navigation Breadcrumb */}
      <div className="px-6 py-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-warm-grey">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/collections">Collections</Link>
        <span>/</span>
        <span className="text-charcoal">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 px-6">
        {/* Image Gallery */}
        <div className="w-full md:w-2/3 space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
             <div className="relative aspect-square overflow-hidden bg-zinc-100 rounded-sm">
                <Image src={product.image} alt="detail 1" fill className="object-cover" />
             </div>
             <div className="relative aspect-square overflow-hidden bg-zinc-100 rounded-sm">
                <Image src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800" alt="fabric detail" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-ivory text-[10px] uppercase tracking-widest font-medium">Texture</span>
                </div>
             </div>
             <div className="relative aspect-square overflow-hidden bg-zinc-100 rounded-sm">
                <Image src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800" alt="craftsmanship" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-ivory text-[10px] uppercase tracking-widest font-medium">Video</span>
                </div>
             </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px]">{product.category}</span>
            <h1 className="text-4xl font-serif text-charcoal">{product.name}</h1>
            <p className="text-xl font-serif text-gold">{product.price}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-medium">
              <span>Select Size</span>
              <button className="text-warm-grey underline">Size Guide</button>
            </div>
            <div className="flex gap-2">
              {['36', '38', '40', '42', '44'].map(size => (
                <button key={size} className={`flex-1 py-3 border text-xs transition-all ${size === '38' ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/10 hover:border-charcoal/40'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-emerald text-ivory py-4 uppercase tracking-[0.2em] text-sm hover:bg-emerald/90 transition-all">
              Add to Shopping Bag
            </button>
            <button className="w-full border border-charcoal/20 text-charcoal py-4 uppercase tracking-[0.2em] text-sm hover:bg-charcoal/5 transition-all">
              Wishlist
            </button>
          </div>

          <div className="space-y-6 pt-8 border-t border-charcoal/5">
            <div className="space-y-2">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-charcoal">The Description</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-charcoal">Details & Care</h3>
              <ul className="text-sm text-charcoal/70 space-y-1 list-disc list-inside">
                {product.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-ivory border border-gold/20 flex items-center gap-4">
               <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>
               <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-charcoal">In-Store Availability</h4>
                  <p className="text-[10px] text-warm-grey">Check stock in your nearest boutique</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <section className="px-6 mt-12 space-y-8">
        <h3 className="text-2xl font-serif text-charcoal text-center">Complete the Look</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {/* Simple placeholders */}
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="space-y-3">
               <div className="relative aspect-[3/4] bg-zinc-100" />
               <div className="text-center space-y-1">
                 <p className="text-[10px] uppercase tracking-widest text-warm-grey">Accessory</p>
                 <p className="text-xs font-medium">Luxury Item {i}</p>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
