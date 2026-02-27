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
    <div className="bg-gray-100 shadow-md flex flex-col overflow-hidden mx-2 max-w-xs sm:max-w-sm">
      <div className="relative aspect-w-4 aspect-h-3">
        <Link href="/insidecart">
          <Image
            className="object-cover px-2 pt-2 hover:cursor-pointer hover:scale-101"
            fill
            alt="Image of somthing"
            src={srcimg}
          />
        </Link>
      </div>
      <div className="bg-white h-[180px] px-3 flex flex-col justify-center items-center font-mono text-lg">
        <h2>Computer</h2>
        <h3>4.6*****</h3>
        <h4>600+bought</h4>
        <h2>Price:2000.00ETB</h2>
        <button
          onClick={increase}
          className="bg-blue-700 text-white px-2 font-semibold rounded mt-2 hover:bg-blue-600 hover:cursor-pointer text-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
