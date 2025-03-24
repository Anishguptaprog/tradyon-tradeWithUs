import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
     <h1 className="text-3xl font-bold mb-4">Welcome to TradeWithUs</h1>
        <p className="mb-4">Find the best B2B trading opportunities.</p>
          {/* Featured Products Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  id: "1",
                  name: "Organic Apples",
                  origin: "USA",
                  packing: "5kg Box",
                  image: "/images/apple.jpg",
                },
                {
                  id: "2",
                  name: "Fresh Mangoes",
                  origin: "India",
                  packing: "10kg Crate",
                  image: "/images/mango.jpg",
                },
                {
                  id: "3",
                  name: "Premium Almonds",
                  origin: "California",
                  packing: "2kg Bag",
                  image: "/images/almond.jpg",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform hover:scale-105"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                  <p className="text-sm text-gray-600">Origin: {product.origin}</p>
                  <p className="text-sm text-gray-600">Packing: {product.packing}</p>
                  <button className="mt-3 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </section>
          <br/>
          <br/>      

      <div className="flex gap-4">
        <Link href="/product/all">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            View Products
          </button>
        </Link>
        <Link href="/profile/all">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            View Profiles
          </button>
        </Link>
      </div>
    </div>
  );
}
