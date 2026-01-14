"use client";
import { createContext } from "react";

type CartContextType = {
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
};

export const CartContext = createContext<CartContextType | null>(null);
