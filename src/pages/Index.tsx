import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductModal } from "@/components/ProductModal";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";
import { Product } from "@/types/product";

/**
 * Index page - Main landing page for the e-commerce store
 * Combines all sections: Hero, Products, Testimonials, CTAs, etc.
 */
const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <Helmet>
        <title>StoreFront - Curated Products for Mindful Living</title>
        <meta
          name="description"
          content="Discover our handpicked collection of premium products designed to elevate your everyday life. Quality craftsmanship meets modern design. Free shipping on orders over $50."
        />
        <meta
          name="keywords"
          content="premium products, lifestyle, home decor, accessories, e-commerce, mindful living"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Header with Navigation */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section - First impression and main CTA */}
          <Hero />

          {/* Trust Features - Social proof icons */}
          <Features />

          {/* Product Grid - Main product showcase */}
          <ProductGrid onViewDetails={handleViewDetails} />

          {/* Secondary CTA - Discount offer */}
          <CTASection variant="secondary" />

          {/* Testimonials - Customer reviews */}
          <Testimonials />

          {/* Final CTA - Drive action */}
          <CTASection variant="primary" />
        </main>

        {/* Footer */}
        <Footer />

        {/* Cart Drawer */}
        <Cart />

        {/* Product Detail Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </CartProvider>
  );
};

export default Index;