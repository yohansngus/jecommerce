"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useCart } from "../useCart";
export default function Navigation() {
  const { cart, setCart } = useCart();
  return (
    <nav className="bg-blue-800 px-5 py-3 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 flex items-center justify-center md:justify-start text-2xl font-bold font-mono text-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]">
          J-market
        </div>
        <div className="flex-1 w-full md:w-auto mx-2 my-2 md:my-auto">
          <form className="w-full md:max-w-md mx-0 bg-white">
            <label className="block text-sm font-medium text-heading sr-only ">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-3 ps-10 bg-neutral-secondary-medium font-mono text-gray-600 text-heading text-sm rounded-base shadow-xs placeholder:text-body"
                placeholder="Search"
                required
              />
              <button
                type="button"
                className="absolute end-1.5 bottom-1.5 text-white bg-blue-500 hover:bg-blue-400 hover:cursor-pointer box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-sm px-3 py-1.5 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <div className="flex items-center justify-center hover:cursor-pointer hover:border-2 border-white text-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]">
            Login
          </div>
          <Link
            className="flex items-center justify-center hover:cursor-pointer hover:border-2 border-white text-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]"
            href="/insidecart"
          >
            <div>Cart:{cart}</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
