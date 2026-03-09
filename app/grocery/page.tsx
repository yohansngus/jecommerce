import Card from "../components/card";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Grocery() {
  const cardsData = [
    {
      name: "Carrots",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      price: "1500.00ETB",
      rating: "4.7*****",
      bought: "800+bought",
    },
    {
      name: "Apples",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      price: "1500.00ETB",
      rating: "4.7*****",
      bought: "800+bought",
    },
    {
      name: "Bananas",
      image:
        "https://images.unsplash.com/photo-1594744319248-9c2a4a50f2ae?w=400&h=400&fit=crop&ixlib=exif",
      price: "1500.00ETB",
      rating: "4.7*****",
      bought: "800+bought",
    },
    {
      name: "Cherries",
      image:
        "https://images.unsplash.com/photo-1564497272-5e5f6d5f72c2?w=400&h=400&fit=crop&ixlib=exif",
      price: "1500.00ETB",
      rating: "4.7*****",
      bought: "800+bought",
    },
    {
      name: "Grapes",
      image:
        "https://images.unsplash.com/photo-1564497252-4a9c2a5f5b2?w=400&h=400&fit=crop&ixlib=exif",
      price: "1500.00ETB",
      rating: "4.7*****",
      bought: "800+bought",
    },
    {
      name: "Oranges",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&ixlib=exif",
      price: "1500.00ETB",
      rating: "4.7*****",
      bought: "800+bought",
    },
  ];

  if (!cardsData || !Array.isArray(cardsData) || cardsData.length === 0) {
    throw new Error("cardsData is empty or null");
  }

  const cards = cardsData.map((card) => {
    if (!card || typeof card !== "object") {
      throw new Error("card data is incomplete or null");
    }

    if (
      !card.name ||
      !card.image ||
      !card.price ||
      !card.rating ||
      !card.bought
    ) {
      throw new Error("card data is incomplete or null");
    }

    if (
      typeof card.name !== "string" ||
      typeof card.image !== "string" ||
      typeof card.price !== "string" ||
      typeof card.rating !== "string" ||
      typeof card.bought !== "string"
    ) {
      throw new Error("card data type is invalid");
    }

    return <Card key={card.name} {...card} />;
  });

  return (
    <div>
      <Navigation />
      <div className="bg-gray-100 my-2 mx-3 py-3 flex items-center justify-center font-mono text-2xl font-semibold text-shadow-[2px_2px_4px_RGBA(0,0,0,0.2)]">
        Grocery
      </div>
      <div className="grid grid-cols-4">
        {cards.length > 0 ? cards : <div>No cards available</div>}
      </div>
      <Footer />
    </div>
  );
}
