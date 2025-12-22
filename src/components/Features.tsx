import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

/**
 * Features section - trust signals and value propositions
 * Shows key benefits of shopping with the store
 */
const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50. Fast delivery worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is encrypted and secure with us.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns. No questions asked.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is here to help you anytime.",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
