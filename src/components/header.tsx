import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/logo-apps/Logo-NoName-removebg-preview.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={LOGO}
              alt="Logo CodeMarket"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-md shadow-sm"
            />
            <span className="text-xl sm:text-xl font-semibold text-gray-800 dark:text-white tracking-wide">
              CodeMarket
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Beranda
            </Link>
            <Link
              to={"/product"}
              className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Products
            </Link>
            <Link
              to={"/contact"}
              className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {isMobileMenuOpen ? (
              <FiX className="text-3xl text-gray-800 dark:text-white" />
            ) : (
              <FiMenu className="text-3xl text-gray-800 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Animated with framer-motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-4 bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg p-6 backdrop-blur-md space-y-4"
            >
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Beranda
              </Link>
              <Link
                to="/product"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
