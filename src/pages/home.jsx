import React from 'react'
import { Link } from 'react-router-dom'
const home = () => {
  return (
    <div className="min-h-screen">
      
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center gap-8">
            <li><Link to="/products" className="text-gray-600 hover:text-blue-600 font-medium">All Products</Link></li>
            <li><Link to="/category" className="text-gray-600 hover:text-blue-600 font-medium">Categories</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Your One-Stop Shop
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing products at unbeatable prices. Shop with confidence and enjoy our hassle-free shopping experience.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home