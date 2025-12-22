import { Product, Testimonial } from "@/types/product";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

// Sample products for the store
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet with RFID protection. Slim design fits perfectly in your pocket.",
    price: 79,
    originalPrice: 99,
    image: product1,
    category: "Accessories",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Artisan Ceramic Mug",
    description: "Hand-thrown ceramic mug with gold rim detail. Perfect for your morning coffee ritual.",
    price: 34,
    image: product2,
    category: "Home",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    badge: "New",
  },
  {
    id: "3",
    name: "Wireless Pro Earbuds",
    description: "Premium wireless earbuds with active noise cancellation. 40-hour battery life.",
    price: 149,
    originalPrice: 199,
    image: product3,
    category: "Electronics",
    rating: 4.7,
    reviews: 412,
    inStock: true,
  },
  {
    id: "4",
    name: "Minimalist Desk Organizer",
    description: "Oak wood and brass desk organizer. Keep your workspace clean and inspiring.",
    price: 89,
    image: product4,
    category: "Office",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    badge: "Limited",
  },
  {
    id: "5",
    name: "Luxury Scented Candle",
    description: "Hand-poured soy wax candle with notes of sandalwood and vanilla. 60-hour burn time.",
    price: 45,
    image: product5,
    category: "Home",
    rating: 4.8,
    reviews: 321,
    inStock: true,
  },
  {
    id: "6",
    name: "Executive Notebook Set",
    description: "Premium leather-bound notebook with gold-tip pen. Perfect for journaling or meetings.",
    price: 59,
    originalPrice: 75,
    image: product6,
    category: "Office",
    rating: 4.6,
    reviews: 178,
    inStock: true,
  },
];

// Sample testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "The quality of these products exceeded my expectations. Fast shipping and beautiful packaging. Will definitely order again!",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Finally found a store that understands minimalist design. Every product feels thoughtfully crafted. Highly recommend!",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "These products are perfect for my clients who appreciate quality and aesthetics. The attention to detail is impeccable.",
    rating: 5,
  },
];
