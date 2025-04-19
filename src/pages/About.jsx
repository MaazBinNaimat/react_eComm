import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to our e-commerce store! We are dedicated to providing high-quality products
          and excellent customer service.
        </p>
        <p className="mb-4">
          Our mission is to make online shopping a seamless and enjoyable experience for
          our customers.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
        <p>
          Founded in 2024, we started with a simple goal: to create an online shopping
          experience that puts customers first.
        </p>
      </div>
    </div>
  )
}

export default About
