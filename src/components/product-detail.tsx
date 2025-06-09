import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Share2, ChevronRight, ChevronLeft } from "lucide-react";
import ProductTabs from "./product-tabs";
import { FiFigma } from "react-icons/fi";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMedia, setActiveMedia] = useState<string>(
    typeof product?.image === "string"
      ? product.image
      : product?.image?.[0] || ""
  );

  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return <div className="p-4">Product not found.</div>;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      toast("Success", {
        description: (
          <span className="flex items-center gap-2 mt-2">
            <FaCheck className="text-lg" /> Copy Successfully
          </span>
        ),
      });
    } catch (error) {
      toast("Error", {
        description: (
          <span className="flex items-center gap-2 mt-2">
            <MdOutlineErrorOutline className="text-lg" /> Error Copy
          </span>
        ),
      });
    }
  };

  console.log(product);

  const media: string[] = [
    ...(Array.isArray(product.image) ? product.image : [product.image]),
    product.video || "https://www.w3schools.com/html/mov_bbb.mp4",
  ];

  const isVideo = (url: string) =>
    url.endsWith(".mp4") || url.includes("youtube.com");

  const isYouTube = (url: string) =>
    url.includes("youtube.com") || url.includes("youtu.be");

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]
      : new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const nextSlide = () => {
    const nextIndex = currentSlide === media.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextIndex);
    setActiveMedia(media[nextIndex]);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide === 0 ? media.length - 1 : currentSlide - 1;
    setCurrentSlide(prevIndex);
    setActiveMedia(media[prevIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Media Section */}
        <div className="space-y-6">
          <div className="relative group rounded-xl overflow-hidden bg-gray-100">
            <AnimatePresence mode="wait">
              {isYouTube(activeMedia) ? (
                <motion.div
                  key={`youtube-${activeMedia}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full aspect-video"
                >
                  <iframe
                    src={getYouTubeEmbedUrl(activeMedia)}
                    title="YouTube video"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  />
                </motion.div>
              ) : isVideo(activeMedia) ? (
                <motion.div
                  key={`video-${activeMedia}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <video
                    src={activeMedia}
                    controls
                    autoPlay
                    muted
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ) : (
                <AspectRatio ratio={16 / 9}>
                  <motion.img
                    key={`image-${activeMedia}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={activeMedia}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              )}
            </AnimatePresence>

            {/* Prev/Next */}
            <button
              onClick={prevSlide}
              className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>

            {/* Favorite */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute cursor-pointer top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition"
              aria-label="Favorite"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
                }`}
              />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-3 justify-start sm:justify-start">
            {media.map((m, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveMedia(m);
                  setCurrentSlide(i);
                }}
                className={`w-20 h-20 cursor-pointer rounded-lg overflow-hidden border-2 ${
                  activeMedia === m
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                {isYouTube(m) ? (
                  <div className="relative cursor-pointer w-full h-full">
                    <img
                      src={`https://img.youtube.com/vi/${
                        getYouTubeEmbedUrl(m).split("/embed/")[1]
                      }/0.jpg`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </div>
                ) : isVideo(m) ? (
                  <video src={m} className="w-full h-full object-cover" />
                ) : (
                  <img
                    src={m}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-500 cursor-pointer hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-2xl sm:text-3xl font-bold text-gray-900">
            ${product.price}
          </p>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Features & Technology
            </h2>
            <ul className="space-y-2">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">Category</h2>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
            <a
              href="https://www.figma.com/design/gZfMeN9wsY2d9FLlrsdSXu/Web-Edu-Core?node-id=0-1&t=8gIIksKdygOW6Zqo-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full cursor-pointer h-12 px-6 text-white bg-blue-500 hover:bg-blue-600 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <FiFigma className="text-xl" />
                <span className="font-semibold tracking-wide">
                  View Full Assets
                </span>
              </Button>
            </a>
            <a
              href="https://wa.me/6287880045713"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full cursor-pointer h-12 text-white bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Tabs or extra details */}
      <div className="mt-12">
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
