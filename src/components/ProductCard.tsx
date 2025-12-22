import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

/**
 * ProductCard - displays individual product with image, info, and add to cart
 * Features hover effects, badges, and pricing display
 */
export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart();

  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-card border border-border/50 hover-lift">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badge */}
        {product.badge && (
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
            {product.badge}
          </Badge>
        )}
        
        {/* Discount Badge */}
        {discountPercent > 0 && (
          <Badge className="absolute right-3 top-3 bg-destructive text-destructive-foreground">
            -{discountPercent}%
          </Badge>
        )}

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="hero"
            size="lg"
            className="mb-4 gap-2"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </span>

        {/* Name */}
        <h3 
          className="mt-1 text-lg font-semibold text-card-foreground cursor-pointer hover:text-primary transition-colors"
          onClick={() => onViewDetails?.(product)}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm font-medium text-foreground">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <span className="text-xl font-bold text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
