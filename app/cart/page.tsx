import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="px-6 py-12 flex flex-col gap-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif text-charcoal text-center">Your Shopping Bag</h1>
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items */}
        <div className="flex-1 space-y-8">
          <div className="flex gap-6 pb-8 border-b border-charcoal/5">
            <div className="relative w-32 aspect-[3/4] bg-zinc-100 overflow-hidden rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=400"
                alt="Product"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-serif">Silk Evening Gown</h3>
                  <p className="text-[10px] uppercase tracking-widest text-warm-grey">Size: 38 | Emerald</p>
                </div>
                <button className="text-warm-grey hover:text-charcoal transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-4 text-xs">
                  <button className="text-charcoal border border-charcoal/10 w-8 h-8 flex items-center justify-center hover:bg-charcoal/5 transition-all">-</button>
                  <span className="w-4 text-center">1</span>
                  <button className="text-charcoal border border-charcoal/10 w-8 h-8 flex items-center justify-center hover:bg-charcoal/5 transition-all">+</button>
                </div>
                <p className="text-lg font-serif text-gold">₹1,25,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] bg-[#F9F8F3] p-8 space-y-8 h-fit border border-charcoal/5">
          <h2 className="text-xl font-serif tracking-tight">Order Summary</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-warm-grey">Subtotal</span>
              <span className="text-charcoal">₹1,25,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-warm-grey">Shipping</span>
              <span className="text-emerald font-medium">Complimentary</span>
            </div>
            <div className="flex justify-between">
              <span className="text-warm-grey">Estimated Tax</span>
              <span className="text-charcoal">Calculated at Checkout</span>
            </div>
            <div className="flex justify-between pt-6 border-t border-charcoal/10 font-bold text-lg">
              <span className="font-serif">Total</span>
              <span className="font-serif">₹1,25,000</span>
            </div>
          </div>

          <div className="space-y-4 pt-4">
             <button className="w-full bg-emerald text-ivory py-5 uppercase tracking-[0.25em] text-xs font-bold hover:bg-emerald/95 transition-all shadow-lg shadow-emerald/20">
               Secure Checkout
             </button>
             <button className="w-full bg-white border border-charcoal text-charcoal py-5 uppercase tracking-[0.25em] text-xs font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
               One-Tap Pay
             </button>
          </div>

          <div className="pt-8 space-y-6">
             <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 bg-gold rounded-full shrink-0" />
                <div>
                   <p className="text-[10px] uppercase tracking-[0.1em] text-charcoal font-bold">White-Glove Delivery</p>
                   <p className="text-[10px] text-warm-grey leading-relaxed mt-1">Scheduled at your convenience. Available in select cities.</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 bg-gold rounded-full shrink-0" />
                <div>
                   <p className="text-[10px] uppercase tracking-[0.1em] text-charcoal font-bold">Authenticity Guaranteed</p>
                   <p className="text-[10px] text-warm-grey leading-relaxed mt-1">Includes digital NFT certificate of ownership.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
