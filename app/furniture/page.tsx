import Card from "../components/card";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
export default function Furniture() {
  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 my-2 mx-3 py-3 flex items-center justify-center font-mono text-2xl font-semibold text-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
        Furniture
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Card
          name="Sofa"
          image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"
          price="15000.00ETB"
          rating="4.7*****"
          bought="300+bought"
        />
        <Card
          name="Table"
          image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
          price="8000.00ETB"
          rating="4.5*****"
          bought="500+bought"
        />
        <Card
          name="Chair"
          image="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop"
          price="5000.00ETB"
          rating="4.6*****"
          bought="700+bought"
        />
        <Card
          name="Bed"
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop"
          price="20000.00ETB"
          rating="4.8*****"
          bought="200+bought"
        />
        <Card
          name="Desk"
          image="https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop"
          price="12000.00ETB"
          rating="4.4*****"
          bought="400+bought"
        />
        <Card
          name="Cabinet"
          image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"
          price="10000.00ETB"
          rating="4.5*****"
          bought="350+bought"
        />
      </div>
      <Footer />
    </div>
  );
}
