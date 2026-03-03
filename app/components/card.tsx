"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../useCart";
export default function Card() {
  const { cart, setCart } = useCart();
  const increase = () => {
    setCart((prev) => cart + 1);
  };
  const srcimg = "/images/electronics.jpg";
  return (
    <div className="bg-gray-100 shadow-md flex flex-col overflow-hidden mx-2 w-full max-w-xs sm:max-w-sm p-4 sm:p-6">
      {/* image wrapper: give a fixed height so `next/image` with fill has space */}
      <div className="relative w-full h-48 sm:h-56">
        <Link href="/insidecart">
          <Image
            className="object-cover px-2 pt-2 hover:cursor-pointer hover:scale-101"
            fill
            alt="Image of somthing"
            src={srcimg}
          />
        </Link>
      </div>
      <div className="bg-white h-[180px] px-3 py-2 sm:py-4 flex flex-col justify-center items-center font-mono text-sm sm:text-lg space-y-1 sm:space-y-2 w-full break-words">
        <h2 className="text-base sm:text-lg w-full break-words text-center">
          Computer
        </h2>
        <h3 className="text-xs sm:text-base w-full break-words text-center">
          4.6*****
        </h3>
        <h4 className="text-xs sm:text-base w-full break-words text-center">
          600+bought
        </h4>
        <h2 className="text-base sm:text-lg w-full break-words text-center">
          Price:2000.00ETB
        </h2>
        <button
          onClick={increase}
          className="bg-blue-700 text-white px-4 py-2 font-semibold rounded mt-2 hover:bg-blue-600 hover:cursor-pointer text-shadow-[2px_2px_4px_rgba(0,0,0,0.6)] text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
