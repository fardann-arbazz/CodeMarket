import { FiShoppingCart, FiStar } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string[];
  video?: string;
  features: string[];
  downloads: number;
  stars: number;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="group relative py-0 cursor-pointer flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        {product.video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={product.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={product.image[0]}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {product.isFeatured && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
            Featured
          </span>
        )}
      </div>

      <CardContent className="flex flex-col flex-grow p-5">
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-full">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-300">
            <FiStar />
            {product.rating}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>

        <div className="mt-auto pt-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex justify-between items-center gap-2">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>

            <Button className="flex items-center w-24 cursor-pointer">
              <FiShoppingCart />
              Buy
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
