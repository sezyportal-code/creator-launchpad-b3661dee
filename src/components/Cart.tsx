import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

/**
 * Cart - slide-out cart drawer showing all items
 * Includes quantity controls, remove, and checkout CTA
 */
export function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This is a demo. In production, this would redirect to payment.",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-card shadow-2xl animate-slide-up md:animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-foreground" />
            <h2 className="text-lg font-semibold text-card-foreground">
              Your Cart ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-muted" />
              <h3 className="mt-4 text-lg font-medium text-foreground">
                Your cart is empty
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Add some products to get started
              </p>
              <Button
                variant="default"
                className="mt-6"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-lg border border-border bg-background p-3"
                >
                  {/* Product Image */}
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium text-foreground">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ${item.price}
                    </span>

                    {/* Quantity Controls */}
                    <div className="mt-auto flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded-md border border-border p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded-md border border-border p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <span className="ml-auto font-medium text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with Totals and Checkout */}
        {items.length > 0 && (
          <div className="border-t border-border p-4">
            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="mb-4 text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear cart
            </button>

            {/* Subtotal */}
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-success font-medium">Free</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-lg font-semibold text-foreground">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              variant="success"
              size="xl"
              className="w-full"
              onClick={handleCheckout}
            >
              Checkout - ${totalPrice.toFixed(2)}
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Secure checkout powered by Stripe
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
