import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * CTASection - call-to-action section to drive conversions
 * Can be used multiple times throughout the page
 */
interface CTASectionProps {
  variant?: "primary" | "secondary";
}

export function CTASection({ variant = "primary" }: CTASectionProps) {
  if (variant === "secondary") {
    return (
      <section className="py-16 bg-background">
        <div className="container">
          <div className="rounded-2xl bg-primary p-8 text-center sm:p-12">
            <Sparkles className="mx-auto h-10 w-10 text-primary-foreground/80" />
            <h2 className="mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
              Limited Time Offer
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Get 20% off your first order. Use code{" "}
              <span className="font-mono font-bold">WELCOME20</span> at checkout.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="#products">
                Claim Your Discount
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Ready to Elevate Your Space?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Join thousands of satisfied customers who have transformed their
          everyday life with our curated collection.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href="#products">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#testimonials">Read Reviews</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
