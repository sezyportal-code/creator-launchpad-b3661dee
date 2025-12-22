import { X, Star, ShoppingBag, Check, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ProductModal - detailed product view in a modal/drawer
 * Shows full description, features, and purchase options
 */
export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 mx-4 max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-card shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground transition-colors hover:bg-background"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col p-6 md:p-8">
            {/* Category */}
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {product.category}
            </span>

            {/* Name */}
            <h2 className="mt-2 text-2xl font-bold text-card-foreground md:text-3xl">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                {product.rating}
              </span>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="destructive">Save {discountPercent}%</Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="mt-4 flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-success">In Stock</span>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="success"
              size="xl"
              className="mt-6 w-full gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart - ${product.price}
            </Button>

            {/* Trust Features */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span className="mt-1 text-xs text-muted-foreground">
                  Free Shipping
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <span className="mt-1 text-xs text-muted-foreground">
                  2 Year Warranty
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="h-5 w-5 text-muted-foreground" />
                <span className="mt-1 text-xs text-muted-foreground">
                  30-Day Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
