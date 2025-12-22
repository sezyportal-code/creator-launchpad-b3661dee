# StoreFront - E-Commerce Landing Page Template

A high-converting, frontend-only e-commerce landing page template built with React + Vite. Perfect for Gumroad, indie products, or any simple storefront.

## Features

- **Hero Section** - Eye-catching product showcase with primary CTA
- **Product Grid** - Responsive grid displaying featured products
- **Product Modal** - Detailed product view with add-to-cart
- **Cart UI** - Slide-out cart drawer (frontend-only, demo mode)
- **Testimonials** - Social proof section with customer reviews
- **Multiple CTAs** - Strategically placed calls-to-action
- **Trust Features** - Shipping, returns, and security badges
- **Responsive Design** - Mobile-first, works on all devices
- **Subtle Animations** - Hover effects and smooth transitions

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## Project Structure

```
src/
├── assets/           # Product images and hero background
├── components/       # React components
│   ├── ui/          # Shadcn UI components
│   ├── Header.tsx   # Navigation header
│   ├── Hero.tsx     # Hero section
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductModal.tsx
│   ├── Cart.tsx     # Cart drawer
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   ├── Features.tsx
│   └── Footer.tsx
├── context/         # React context (CartContext)
├── data/            # Sample product data
├── types/           # TypeScript types
├── hooks/           # Custom hooks
├── lib/             # Utility functions
└── pages/           # Page components
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Customization

### Products
Edit `src/data/products.ts` to add your own products.

### Colors
Edit `src/index.css` to customize the color palette.

### Content
- Update hero text in `src/components/Hero.tsx`
- Modify testimonials in `src/data/products.ts`
- Change footer links in `src/components/Footer.tsx`

## Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Adding Payments

This is a frontend-only template. To add real payments:

1. **Gumroad** - Use Gumroad's embed or overlay checkout
2. **Stripe** - Add Stripe Checkout or Elements
3. **Shopify** - Use Shopify Buy Button

---

Built with Lovable for indie founders and creators.
