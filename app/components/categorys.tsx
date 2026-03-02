import Image from "next/image";
export default function Categorys() {
  // base card container; auto-height with aspect ratio ensures consistent sizing
  const card = "relative bg-white overflow-hidden p-5 flex flex-col";
  const imageWrapper = "relative w-full aspect-square";
  const imgClass =
    "object-cover hover:cursor-pointer hover:scale-105 transition-transform";
  const txttoimg =
    "absolute bottom-5 left-1/2 -translate-x-1/2 text-sm sm:text-base lg:text-2xl text-white text-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] font-semibold";

  const categories = [
    {
      src: "/images/homeequipment.webp",
      alt: "image of home equipment",
      title: "Home equipment",
    },
    {
      src: "/images/womansclothing.webp",
      alt: "image of woman's clothing",
      title: "Women clothing",
    },
    {
      src: "/images/menclothing.jpg",
      alt: "image of men clothing",
      title: "Men clothing",
    },
    {
      src: "/images/electronics.jpg",
      alt: "image of electronics",
      title: "Mobiles",
    },
    {
      src: "/images/mobiels.jpg",
      alt: "image of mobiles",
      title: "Electronics",
    },
    {
      src: "/images/tvs.jpg",
      alt: "image of tv's",
      title: "TVs",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:flex xl:flex-row xl:flex-nowrap xl:gap-4 mx-5 my-5 bg-gray-200 border-[0.5px] border-gray-300 shadow-sm xl:border-0 xl:shadow-none rounded-md">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className={`${card} order-[${idx + 1}] lg:flex-none lg:w-[calc(100%/6-3rem)]`}
        >
          <div className={imageWrapper}>
            <Image className={imgClass} fill src={cat.src} alt={cat.alt} />
          </div>
          <h2 className={txttoimg}>{cat.title}</h2>
        </div>
      ))}
    </div>
  );
}
