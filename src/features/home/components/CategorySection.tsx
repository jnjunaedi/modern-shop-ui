import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const categories = [
  { id: 1, name: 'Elektronik', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137729/Modern_Blender_and_Rice_Cooker_Set-removebg-preview.png' },
  { id: 2, name: 'Handphone', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1794997572/Sleek_Purple_Smartphone_Product_Shot-removebg-preview.png' },
  { id: 3, name: 'Laptop', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1794997529/ASUS_Vivobook_Colorful_Studio_Shot-removebg-preview.png' },
  { id: 4, name: 'TV & Monitor', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137732/4K_TV_Displaying_a_Mountain_Lake-removebg-preview.png' },
  { id: 5, name: 'Kesehatan & kecantikan', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137731/Pink_Beauty_and_Wellness_Collection-removebg-preview.png' },
  { id: 6, name: 'Bayi & Mainan', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137731/Teddy_Bear_and_Colorful_Toy_Collection-removebg-preview.png' },
  { id: 7, name: 'Hewan peliharaan', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137731/Playful_Kitten_Cat_Care_Collection-removebg-preview.png' },
  { id: 8, name: 'Rumah', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137731/Scandinavian_Living_Room_Vignette-removebg-preview.png' },
  { id: 9, name: 'Aksesoris wanita', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137734/Neutral_Fashion_Essentials_Still_Life__1_-removebg-preview.png' },
  { id: 10, name: 'Aksesoris pria', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137729/Men_s_Black_Accessories_Collection-removebg-preview.png' },
  { id: 11, name: 'Aksesoris anak', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137733/Cheerful_Kids_Accessories_Collection-removebg-preview.png' },
  { id: 12, name: 'Olahraga', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137733/Fitness_Gear_Studio_Still_Life-removebg-preview.png' },
  { id: 13, name: 'Gaming', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137731/RGB_Gaming_Gear_Collection-removebg-preview.png' },
  { id: 14, name: 'Earphone', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1795137731/Sleek_Wireless_Earbuds_and_Charging_Case-removebg-preview.png' },
  { id: 15, name: 'Smartwatch', image: 'https://res.cloudinary.com/dvrjwaen/image/upload/v1794997568/Gemini_Generated_Image_wv36k7wv36k7wv36-removebg-preview.png' },
];

function CategorySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'right' | 'left') => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-3 mx-3 py-2 md:py-4">
      <div className="flex items-center justify-between my-3">
        <h1 className="text-xl font-bold">Kategori</h1>
        <div className="flex items-center gap-2">
          <button onClick={() => handleScroll('left')} aria-label="Geser ke kiri" className="p-1.5 rounded-full border bg-white shadow-sm hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => handleScroll('right')} aria-label="Geser ke kanan" className="p-1.5 rounded-full border bg-white shadow-sm hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="grid grid-rows-2 grid-flow-col overflow-x-auto scroll-smooth  bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categories.map((c) => (
          <div key={c.id} className="w-28 sm:w-36 md:w-44 lg:w-52 p-3 border rounded-md flex flex-col items-center justify-between hover:bg-gray-50 transition cursor-pointer">
            <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center">
              <img src={c.image} alt={c.name} className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-xs sm:text-sm text-center mt-2 font-medium text-gray-700">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
