import ProductCard from "./product-card";
import { products } from "@/data/products";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  return (
    <section id="products" className="py-16 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            🚀 Source Code Marketplace
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Premium, scalable source code templates for developers — ready to
            use and well-documented.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to={"/product"}>
            <Button
              variant={"outline"}
              className="py-5 bg-transparent cursor-pointer"
            >
              Load More Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
