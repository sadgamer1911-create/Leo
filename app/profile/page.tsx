import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="px-6 py-12 max-w-2xl mx-auto space-y-12">
       <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center text-charcoal border border-gold/20">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div className="text-center">
             <h1 className="text-2xl font-serif text-charcoal uppercase tracking-widest">James V.</h1>
             <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Platinum Member</p>
          </div>
       </div>

       <div className="space-y-4">
          <h2 className="text-[10px] uppercase tracking-widest font-bold text-warm-grey border-b border-charcoal/5 pb-2">Account</h2>
          <div className="space-y-6">
             <ProfileLink label="Personal Details" />
             <ProfileLink label="Orders & Returns" />
             <ProfileLink label="Addresses" />
             <ProfileLink label="Payment Methods" />
          </div>
       </div>

       <div className="space-y-4">
          <h2 className="text-[10px] uppercase tracking-widest font-bold text-warm-grey border-b border-charcoal/5 pb-2">Concierge</h2>
          <div className="space-y-6">
             <ProfileLink label="Book an Appointment" />
             <ProfileLink label="Virtual Stylist History" />
             <ProfileLink label="Digital Wardrobe" />
          </div>
       </div>

       <button className="w-full text-center text-[10px] uppercase tracking-widest text-warm-grey py-8 hover:text-charcoal transition-colors">
         Sign Out
       </button>
    </div>
  );
}

function ProfileLink({ label }: { label: string }) {
  return (
    <Link href="#" className="flex justify-between items-center group">
       <span className="text-sm text-charcoal group-hover:text-gold transition-colors">{label}</span>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-warm-grey group-hover:text-gold transition-colors"><path d="m9 18 6-6-6-6"></path></svg>
    </Link>
  );
}
