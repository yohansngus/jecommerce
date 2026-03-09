import Card from "../components/card";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
export default function Fashiongallery() {
  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 my-2 mx-3 py-3 flex items-center justify-center font-mono text-2xl font-semibold text-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
        Fashion Gallery
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Card
          name="Shoes"
          image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
          price="1500.00ETB"
          rating="4.7*****"
          bought="800+bought"
        />
        <Card
          name="Pants"
          image="https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
          price="1200.00ETB"
          rating="4.5*****"
          bought="650+bought"
        />
        <Card
          name="Underwear"
          image="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
          price="500.00ETB"
          rating="4.8*****"
          bought="900+bought"
        />
        <Card
          name="Hat"
          image="https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=400&fit=crop"
          price="800.00ETB"
          rating="4.6*****"
          bought="400+bought"
        />
        <Card
          name="Shirt"
          image="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop"
          price="1000.00ETB"
          rating="4.4*****"
          bought="700+bought"
        />
        <Card
          name="T-shirt"
          image="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop"
          price="600.00ETB"
          rating="4.9*****"
          bought="1000+bought"
        />
      </div>
      <Footer />
    </div>
  );
}
