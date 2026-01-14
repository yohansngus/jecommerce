import Image from "next/image";
export default function Categorys() {
  const img = "p-5 bg-white m-2 overflow-hidden";
  const inimg = "object-cover p-2 hover:cursor-pointer hover:scale-101";
  const txttoimg =
    "absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl text-white text-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] font-semibold";
  const img1 = "col-span-4 row-span-4";
  const img2 = "col-span-4 row-span-2";
  const img3 = "col-span-2 row-span-4";
  const img4 = "col-span-2 row-span-2";
  const img5 = "col-span-4 row-span-2";
  const img6 = "col-span-2 row-span-2";
  return (
    <div className="grid grid-cols-12 grid-rows-4 mx-5 my-5 bg-gray-200 h-[400px]">
      <div className={`${img} ${img1} relative`}>
        <Image
          className={inimg}
          fill
          src="/images/homeequipment.webp"
          alt="image of home equipment"
        />
        <h2 className={txttoimg}>Home equipment</h2>
      </div>
      <div className={`${img} ${img2} relative`}>
        <Image
          className={inimg}
          fill
          src="/images/womansclothing.webp"
          alt="image of woman's clothing"
        />
        <h2 className={txttoimg}>Womem clothing</h2>
      </div>
      <div className={`${img} ${img3} relative`}>
        <Image
          className={inimg}
          fill
          src="/images/menclothing.jpg"
          alt="image of men clothing"
        />
        <h2 className={txttoimg}>Men clothing</h2>
      </div>
      <div className={`${img} ${img4} relative`}>
        <Image
          className={inimg}
          fill
          src="/images/electronics.jpg"
          alt="image of electronics"
        />
        <h2 className={txttoimg}>Mobiel's</h2>
      </div>
      <div className={`${img} ${img5} relative`}>
        <Image
          className={inimg}
          fill
          src="/images/mobiels.jpg"
          alt="image of mobiel's"
        />
        <h2 className={txttoimg}>Electronic's</h2>
      </div>
      <div className={`${img} ${img6} relative`}>
        <Image
          className={inimg}
          fill
          src="/images/tvs.jpg"
          alt="image of tv's"
        />
        <h2 className={txttoimg}>Tv's</h2>
      </div>
    </div>
  );
}
