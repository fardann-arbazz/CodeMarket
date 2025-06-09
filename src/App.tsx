import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayouts from "./layouts/home-layouts";
import AllProductsPage from "./pages/all-product";
import Header from "./components/header";
import ProductDetailPage from "./pages/product-detail";
import ContactPage from "./pages/contact";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster />

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomeLayouts />} />
          <Route path="/product" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
