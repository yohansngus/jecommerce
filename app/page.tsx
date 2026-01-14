import Image from "next/image";
import Navigation from "./components/navigation";
import Alternative from "./components/alternatives";
import Ad from "./components/ad";
import Categorys from "./components/categorys";
import Paragraph from "./components/paragraph";
import Footer from "./components/footer";
import { createContext } from "vm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Ad />
      <Alternative />
      <div className="category-title flex justify-center text-3xl font-semibold font-mono text-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]">
        Shop by category
      </div>
      <Paragraph />
      <Categorys />
      <Footer />
    </div>
  );
}
