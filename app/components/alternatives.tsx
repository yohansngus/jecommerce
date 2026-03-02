import Image from "next/image";
import Link from "next/link";
export default function Alternative() {
  const categoryStyle =
    "overflow-hidden bg-white mx-2 w-full sm:w-1/2 lg:w-1/6";
  const alternativeimg =
    "object-cover w-full h-auto max-h-40 flex justify-center mx-auto hover:cursor-pointer hover:scale-105";
  const alternativetext =
    "text-black text-sm sm:text-base font-mono flex justify-center text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]";
  return (
    <div className="grid grid-cols-1 xl:flex xl:flex-row xl:flex-nowrap gap-2 mx-5 my-5 p-3 bg-gray-200 border-[0.5px] border-gray-300 shadow-sm xl:border-0 xl:shadow-none rounded-md">
      <div className={categoryStyle}>
        <Link href="/fashiongallery">
          <Image
            className={alternativeimg}
            src="/images/fashionmanandwoman.png"
            alt="This is Fashion image"
            width={200}
            height={100}
          />
        </Link>
        <h2 className={alternativetext}>Fashion</h2>
      </div>
      <div className={categoryStyle}>
        <Link href="/electronics">
          <Image
            className={alternativeimg}
            src="/images/electronics2.jpeg"
            alt="This is Fashion image"
            width={200}
            height={100}
          />
        </Link>
        <h2 className={alternativetext}>Electronics</h2>
      </div>
      <div className={categoryStyle}>
        <Link href="/furniture">
          <Image
            className={alternativeimg}
            src="/images/furniture.jpg"
            alt="This is Fashion image"
            width={200}
            height={100}
          />
        </Link>
        <h2 className={alternativetext}>Furniture</h2>
      </div>
      <div className={categoryStyle}>
        <Link href="/mobandtv">
          <Image
            className={alternativeimg}
            src="/images/mobielandtv.jpg"
            alt="This is Fashion image"
            width={200}
            height={100}
          />
        </Link>
        <h2 className={alternativetext}>Mob&Tv</h2>
      </div>
      <div className={categoryStyle}>
        <Link href="/drugs">
          <Image
            className={alternativeimg}
            src="/images/healthcaredrugs.jpg"
            alt="This is Fashion image"
            width={200}
            height={100}
          />
        </Link>
        <h2 className={alternativetext}>Drugs</h2>
      </div>
      <div className={categoryStyle}>
        <Link href="/grocery">
          <Image
            className={alternativeimg}
            src="/images/grocery.jpg"
            alt="This is Fashion image"
            width={200}
            height={100}
          />
        </Link>
        <h2 className={alternativetext}>Grocery</h2>
      </div>
    </div>
  );
}
