import Card from "../components/card";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
export default function Drugs() {
  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 my-2 mx-3 py-3 flex items-center justify-center font-mono text-2xl font-semibold text-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
        Drugs
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Card
          name="Pain Reliever"
          image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop"
          price="150.00ETB"
          rating="4.6*****"
          bought="3000+bought"
        />
        <Card
          name="Vitamins"
          image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
          price="200.00ETB"
          rating="4.8*****"
          bought="2500+bought"
        />
        <Card
          name="First Aid Kit"
          image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
          price="500.00ETB"
          rating="4.7*****"
          bought="1500+bought"
        />
        <Card
          name="Thermometer"
          image="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop"
          price="300.00ETB"
          rating="4.5*****"
          bought="1000+bought"
        />
        <Card
          name="Supplements"
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
          price="250.00ETB"
          rating="4.9*****"
          bought="2000+bought"
        />
        <Card
          name="Medicine"
          image="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
          price="100.00ETB"
          rating="4.4*****"
          bought="4000+bought"
        />
      </div>
      <Footer />
    </div>
  );
}
