# Sandrill - Beach Storage Solutions

A modern, responsive website for Sandrill, an innovative beach storage and security product company. Built with Next.js, React, and Tailwind CSS.

## 🌊 About Sandrill

Sandrill is a beach storage solution company that specializes in innovative products designed to keep your beach essentials safe, organized, and protected from the elements. Our flagship product, the Sand Safe 2.0, uses patented sand anchor technology to secure valuables while you enjoy the waves.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Beautiful, beach-themed design with smooth animations
- **Product Showcase**: Detailed product pages with features and pricing
- **Company Information**: About page with team, mission, and company story
- **Contact System**: Contact form and support information
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel-ready

## 📦 Products Featured

1. **Sand Safe 2.0** - Ultimate beach storage with sand anchor technology
2. **Collapsible Storage** - Portable, foldable storage solutions
3. **Beach Anchor Kit** - Complete anchoring system for beach equipment
4. **Beach Towel Organizer** - Sand-resistant towel storage
5. **Cooler Lock System** - Secure cooler protection
6. **Beach Umbrella Stand** - Wind-resistant umbrella anchoring

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sandrill
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
sandrill/
├── app/
│   ├── page.tsx          # Homepage
│   ├── products/
│   │   └── page.tsx      # Products page
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── favicon.ico       # Site favicon
├── public/               # Static assets
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── next.config.ts        # Next.js config
└── README.md            # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#ff6b35` (Orange)
- **Secondary**: `#4ecdc4` (Teal)
- **Accent**: `#ffeaa7` (Yellow)
- **Sand**: `#f4d03f` (Golden)
- **Ocean**: `#74b9ff` (Blue)
- **Coral**: `#fd79a8` (Pink)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

## 📱 Pages

### Homepage (`/`)
- Hero section with product showcase
- Features overview
- Product highlights
- Customer testimonials
- Company story
- Call-to-action sections

### Products (`/products`)
- Complete product catalog
- Detailed product information
- Pricing and features
- Category filtering
- Newsletter signup

### About (`/about`)
- Company story and mission
- Team member profiles
- Company values
- Timeline/milestones
- Statistics and achievements

### Contact (`/contact`)
- Contact form
- Company information
- Support hours
- FAQ section
- Social media links

## 🔧 Customization

### Adding New Products
1. Update the products array in `/app/products/page.tsx`
2. Add product images to the `/public` directory
3. Update product categories and features as needed

### Modifying Colors
1. Update CSS custom properties in `/app/globals.css`
2. Modify the color variables in the `:root` selector
3. Update Tailwind theme configuration if needed

### Adding New Pages
1. Create a new directory in `/app/`
2. Add a `page.tsx` file
3. Update navigation links in the main layout

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be added in Vercel dashboard

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📈 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about the website:
- Email: hello@sandrill.com
- Phone: (555) 123-4567
- Website: www.sandrill.com

## 🏖️ About the Company

Sandrill was founded by Alex Johnson, a former lifeguard who lost his phone to the ocean one too many times. What started as a simple prototype has grown into a company dedicated to revolutionizing beach storage and security solutions.

Our mission is to make every beach experience worry-free by providing innovative, reliable, and stylish storage solutions that protect your valuables while you enjoy the sun, sand, and surf.

---

**Made with ❤️ for beach lovers everywhere**
