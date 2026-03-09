import Card from "../components/card";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
export default function Mobandtv() {
  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 my-2 mx-3 py-3 flex items-center justify-center font-mono text-2xl font-semibold text-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
        Mobiles and TVs
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Card
          name="Smartphone"
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
          price="15000.00ETB"
          rating="4.8*****"
          bought="2500+bought"
        />
        <Card
          name="Feature Phone"
          image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop"
          price="5000.00ETB"
          rating="4.2*****"
          bought="800+bought"
        />
        <Card
          name="Tablet"
          image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
          price="12000.00ETB"
          rating="4.6*****"
          bought="1200+bought"
        />
        <Card
          name="Smart TV"
          image="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"
          price="30000.00ETB"
          rating="4.7*****"
          bought="400+bought"
        />
        <Card
          name="4K TV"
          image="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"
          price="35000.00ETB"
          rating="4.9*****"
          bought="300+bought"
        />
        <Card
          name="Socket"
          image="https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop"
          price="500.00ETB"
          rating="4.5*****"
          bought="1500+bought"
        />
      </div>
      <Footer />
    </div>
  );
}
