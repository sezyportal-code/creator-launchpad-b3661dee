// Product type definition for the e-commerce store
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // For showing discounts
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string; // e.g., "Best Seller", "New", "Limited"
}

// Cart item extends product with quantity
export interface CartItem extends Product {
  quantity: number;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}
