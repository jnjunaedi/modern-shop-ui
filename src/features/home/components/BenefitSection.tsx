import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Coins, CreditCard, Gift, Headphones, Percent, ShieldCheck, ShoppingBag, ShoppingCart, Tag, Truck } from 'lucide-react';

const benefits = [
  { id: 1, label: ['Toko', 'Shopins'], icon: ShoppingCart, color: 'text-blue-600' },
  { id: 2, label: ['Shopins', 'Mall'], icon: ShoppingBag, color: 'text-emerald-600' },
  { id: 3, label: ['Gratis', 'Ongkir'], icon: Truck, color: 'text-yellow-600' },
  { id: 4, label: ['Garansi Uang', 'Kembali'], icon: Coins, color: 'text-zinc-600' },
  { id: 5, label: ['Promo &', 'Voucher'], icon: Percent, color: 'text-red-600' },
  { id: 6, label: ['Bayar di', 'Tempat'], icon: CreditCard, color: 'text-purple-600' },
  { id: 7, label: ['Flash', 'Sale'], icon: Tag, color: 'text-orange-600' },
  { id: 8, label: ['Hadiah', 'Harian'], icon: Gift, color: 'text-pink-600' },
  { id: 9, label: ['Proteksi', 'Produk'], icon: ShieldCheck, color: 'text-teal-600' },
  { id: 10, label: ['Layanan', '24 Jam'], icon: Headphones, color: 'text-indigo-600' },
];

function BenefitSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 100; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mx-2 relative group">
      <button
        type="button"
        onClick={() => scroll('left')}
        aria-label="Geser Kiri"
        className="flex items-center justify-center absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white text-zinc-700 rounded-full shadow-md border border-zinc-200 transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div ref={scrollRef} className="flex items-center justify-between gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none] p-3 bg-zinc-50 rounded-lg">
        {benefits.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="flex flex-col items-center shrink-0 min-w-[72px] cursor-pointer group/item">
              <span className="inline-block p-4 bg-white rounded-md shadow-xs group-hover/item:scale-105 transition-transform">
                <IconComponent className={item.color} />
              </span>
              <p className="text-xs text-center mt-1.5 leading-tight text-zinc-700">
                {item.label[0]} <br /> {item.label[1]}
              </p>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => scroll('right')}
        aria-label="Geser Kanan"
        className="flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white text-zinc-700 rounded-full shadow-md border border-zinc-200 transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default BenefitSection;
