"use client";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import { useContext, useState } from "react";
import { useCart } from "../useCart";
export default function Insidecart() {
  const { cart, setCart } = useCart();
  const increase = () => {
    setCart((prev) => prev + 1);
  };
  const decrease = () => {
    setCart((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const srcimg = "/images/electronics.jpg";
  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 my-2 mx-3 py-3 flex items-center justify-center font-mono text-2xl font-semibold text-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
        You have {cart} items.
      </div>
      <div className="bg-gray-100 shadow-md flex flex-col overflow-hidden p-3 mx-2 h-[400px]">
        <div className="h-[220px] relative">
          <Image
            className="object-cover px-2 pt-2 hover:cursor-pointer hover:scale-101"
            fill
            alt="Image of somthing"
            src={srcimg}
          />
        </div>
        <div className="bg-white h-[180px] px-3 flex flex-col justify-center items-center font-mono text-lg">
          <h2>Computer</h2>
          <h3>4.6*****</h3>
          <h4>600+bought</h4>
          <h2>Price:2000.00ETB</h2>
          <h2 className="flex gap-5 font-mono text-2xl hover:cursor-pointer">
            <div onClick={decrease} className="text-red-500 font-bold">
              -
            </div>
            <div>{cart}</div>
            <div
              onClick={increase}
              className="text-green-500 font-bold hover:cursor-pointer"
            >
              +
            </div>
          </h2>
        </div>
      </div>
      <p className="bg-gray-200 m-2 p-2">
        The price and availability of items at <b>J-market</b> .com are subject
        to change. The Cart is a temporary place to store a list of your items
        and reflects each item's most recent price. Shopping Cart Learn more Do
        you have a gift card or promotional code? We'll ask you to enter your
        claim code when it's time to pay.
      </p>
      <div className="bg-gray-200 m-2 p-2 flex flex-col gap-3 justify-center items-center">
        <h1 className="text-2xl font-bold font-serif text-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
          See personalized recommendations
        </h1>
        <button className="bg-blue-700 text-white font-bold px-2 py-1 text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded hover:cursor-pointer">
          Sign up
        </button>
      </div>
      <Footer />
    </div>
  );
}
