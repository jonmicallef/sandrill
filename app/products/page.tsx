import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Sand Safe 2.0",
      price: 49.99,
      originalPrice: 69.99,
      description: "The ultimate beach storage solution with patented sand anchor technology. Keep your valuables secure while you enjoy the waves.",
      features: [
        "Patented sand anchor technology",
        "Waterproof construction",
        "Large storage capacity",
        "Easy to use and install",
        "UV-resistant materials",
        "Includes security cable"
      ],
      colors: ["Orange", "Blue", "Pink"],
      image: "/sand-safe-2.0.jpg",
      category: "Storage"
    },
    {
      id: 2,
      name: "Collapsible Storage",
      price: 29.99,
      originalPrice: 39.99,
      description: "Compact, portable storage that folds down for easy transport. Perfect for organizing beach toys, towels, and essentials.",
      features: [
        "Collapsible design",
        "Multiple compartments",
        "Water-resistant fabric",
        "Carry handles",
        "Lightweight construction",
        "Easy to clean"
      ],
      colors: ["Red", "Yellow", "Green"],
      image: "/collapsible-storage.jpg",
      category: "Storage"
    },
    {
      id: 3,
      name: "Beach Anchor Kit",
      price: 39.99,
      originalPrice: 49.99,
      description: "Complete anchoring system for umbrellas, tents, and beach equipment. Stay secure in any weather condition.",
      features: [
        "Heavy-duty construction",
        "Multiple anchor points",
        "Weather-resistant",
        "Easy installation",
        "Includes carrying case",
        "Universal compatibility"
      ],
      colors: ["Silver", "Black"],
      image: "/beach-anchor-kit.jpg",
      category: "Anchoring"
    },
    {
      id: 4,
      name: "Beach Towel Organizer",
      price: 19.99,
      originalPrice: 24.99,
      description: "Keep your beach towels organized and sand-free with our innovative towel storage solution.",
      features: [
        "Sand-resistant design",
        "Multiple towel capacity",
        "Hanging hooks included",
        "Quick-dry material",
        "Compact storage",
        "Easy to clean"
      ],
      colors: ["White", "Beige", "Blue"],
      image: "/towel-organizer.jpg",
      category: "Organization"
    },
    {
      id: 5,
      name: "Cooler Lock System",
      price: 34.99,
      originalPrice: 44.99,
      description: "Secure your cooler and keep your drinks cold with our innovative locking system designed for beach use.",
      features: [
        "Heavy-duty lock mechanism",
        "Weather-resistant",
        "Universal cooler fit",
        "Easy to install",
        "Includes spare keys",
        "Anti-theft design"
      ],
      colors: ["Black", "Silver"],
      image: "/cooler-lock.jpg",
      category: "Security"
    },
    {
      id: 6,
      name: "Beach Umbrella Stand",
      price: 24.99,
      originalPrice: 29.99,
      description: "Sturdy umbrella stand that keeps your shade secure even in windy conditions.",
      features: [
        "Weighted base design",
        "Adjustable height",
        "Wind-resistant",
        "Easy to transport",
        "Universal umbrella fit",
        "Durable construction"
      ],
      colors: ["Gray", "Black"],
      image: "/umbrella-stand.jpg",
      category: "Anchoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-coral text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our complete range of innovative beach storage and security solutions designed to enhance your beach experience.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              {/* Product Image */}
              <div className="h-64 bg-gradient-to-br from-sand/20 to-ocean/20 flex items-center justify-center relative">
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-coral rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="bg-coral text-white px-2 py-1 rounded text-sm font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                  <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-coral rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Storage</h3>
              <p className="text-gray-600">Secure storage solutions</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-ocean to-secondary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anchoring</h3>
              <p className="text-gray-600">Secure anchoring systems</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-sand to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organization</h3>
              <p className="text-gray-600">Keep things organized</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-coral to-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">Protect your belongings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary to-coral text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get notified about new products, special offers, and beach tips!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
