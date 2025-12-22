import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Product } from "@/types/product";

interface ProductGridProps {
  onViewDetails?: (product: Product) => void;
}

/**
 * ProductGrid - displays all products in a responsive grid layout
 * Section includes heading, subheading, and product cards
 */
export function ProductGrid({ onViewDetails }: ProductGridProps) {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Collection
          </span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Each product is carefully selected for quality, design, and
            functionality. Discover items that bring joy to your everyday life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} onViewDetails={onViewDetails} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
