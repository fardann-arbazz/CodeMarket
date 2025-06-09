import { Link, useParams } from "react-router-dom";
import ProductDetail from "@/components/product-detail";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProductDetailPage = () => {
  const { id } = useParams();

  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );
  if (!product)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50 dark:bg-gray-900 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Produk Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 my-5 w-[500px]">
            Sorry, we couldn't find the product you're looking for. It may have
            been removed or the URL is incorrect.
          </p>
          <Link to={"/"}>
            <Button size={"lg"} className="cursor-pointer rounded-sm">
              Back To Home
            </Button>
          </Link>
        </motion.div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <ProductDetail />
    </div>
  );
};

export default ProductDetailPage;
