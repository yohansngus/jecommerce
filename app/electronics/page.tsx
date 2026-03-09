import Card from "../components/card";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
export default function Electronics() {
  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 my-2 mx-3 py-3 flex items-center justify-center font-mono text-2xl font-semibold text-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
        Electronics
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Card
          name="Laptop"
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
          price="25000.00ETB"
          rating="4.8*****"
          bought="1200+bought"
        />
        <Card
          name="Smartphone"
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
          price="15000.00ETB"
          rating="4.7*****"
          bought="2000+bought"
        />
        <Card
          name="Tablet"
          image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
          price="12000.00ETB"
          rating="4.6*****"
          bought="800+bought"
        />
        <Card
          name="Headphones"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
          price="3000.00ETB"
          rating="4.9*****"
          bought="1500+bought"
        />
        <Card
          name="Smartwatch"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
          price="8000.00ETB"
          rating="4.5*****"
          bought="600+bought"
        />
        <Card
          name="Camera"
          image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop"
          price="20000.00ETB"
          rating="4.7*****"
          bought="500+bought"
        />
      </div>
      <Footer />
    </div>
  );
}
