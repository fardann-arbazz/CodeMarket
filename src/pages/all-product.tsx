import ProductCard from "@/components/product-card";
import { products } from "@/data/products";

const AllProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-sky-300">
            Premium Digital Assets
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handcrafted code solutions to accelerate your development process
          </p>

          {/* Dekorasi visual */}
          <div className="mt-8 flex justify-center space-x-4">
            {["⭐", "🚀", "✨"].map((emoji) => (
              <span
                key={emoji}
                className="text-2xl opacity-0 animate-float"
                style={{ animationDelay: `${Math.random() * 0.5}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid dengan efek interaktif */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="transition-transform duration-300 hover:scale-[1.03]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
