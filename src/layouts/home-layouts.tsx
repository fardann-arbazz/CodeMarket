import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProductShowcase from "@/components/product-showcase";
import ContactPage from "@/pages/contact";

type Props = {
  darkMode?: boolean;
};

const HomeLayouts = (props: Props) => {
  return (
    <div
      className={`min-h-screen ${
        props.darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="dark:bg-gray-900 scroll-auto dark:text-gray-100">
        <main>
          <Hero />
          <Features />
          <ProductShowcase />
          <ContactPage />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayouts;
