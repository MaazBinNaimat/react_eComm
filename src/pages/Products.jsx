import React, { useState } from 'react';

const Products = () => {
    const [products] = useState([
        {
          id: 1,
          name: 'Wireless Headphones',
          description: 'High-quality wireless headphones with noise cancellation.',
          price: '$59.99',
          imageUrl: 'https://picsum.photos/id/1010/300/200',
        },
        {
          id: 2,
          name: 'Smartwatch Pro',
          description: 'Track your fitness and stay connected with Smartwatch Pro.',
          price: '$129.99',
          imageUrl: 'https://picsum.photos/id/1011/300/200',
        },
        {
          id: 3,
          name: '4K Action Camera',
          description: 'Capture every adventure in ultra-high definition.',
          price: '$89.99',
          imageUrl: 'https://picsum.photos/id/1012/300/200',
        },
        {
          id: 4,
          name: 'Bluetooth Speaker',
          description: 'Portable and powerful sound on the go.',
          price: '$39.99',
          imageUrl: 'https://picsum.photos/id/1015/300/200',
        },
        {
          id: 5,
          name: 'Gaming Mouse',
          description: 'Precision and speed for your gaming sessions.',
          price: '$24.99',
          imageUrl: 'https://picsum.photos/id/1016/300/200',
        },
        {
          id: 6,
          name: 'Ergonomic Chair',
          description: 'Comfort and support for long working hours.',
          price: '$149.99',
          imageUrl: 'https://picsum.photos/id/1020/300/200',
        },
        {
          id: 7,
          name: 'LED Monitor 27"',
          description: 'Crystal-clear display for work and entertainment.',
          price: '$199.99',
          imageUrl: 'https://picsum.photos/id/1021/300/200',
        },
        {
          id: 8,
          name: 'Wireless Charger',
          description: 'Fast and convenient charging experience.',
          price: '$19.99',
          imageUrl: 'https://picsum.photos/id/1022/300/200',
        },
        {
          id: 9,
          name: 'Mechanical Keyboard',
          description: 'Tactile feedback for a satisfying typing experience.',
          price: '$74.99',
          imageUrl: 'https://picsum.photos/id/1023/300/200',
        },
        {
          id: 10,
          name: 'Fitness Tracker',
          description: 'Monitor your steps, heart rate, and more.',
          price: '$49.99',
          imageUrl: 'https://picsum.photos/id/1024/300/200',
        },
        {
          id: 11,
          name: 'Noise Cancelling Earbuds',
          description: 'Block out the world and focus on your music.',
          price: '$89.99',
          imageUrl: 'https://picsum.photos/id/1025/300/200',
        },
        {
          id: 12,
          name: 'Laptop Stand',
          description: 'Raise your laptop for better ergonomics.',
          price: '$29.99',
          imageUrl: 'https://picsum.photos/id/1026/300/200',
        },
        {
          id: 13,
          name: 'Webcam HD',
          description: 'Clear and sharp video for meetings and streams.',
          price: '$39.99',
          imageUrl: 'https://picsum.photos/id/1027/300/200',
        },
        {
          id: 14,
          name: 'Desk Lamp',
          description: 'Brighten your workspace with adjustable lighting.',
          price: '$22.99',
          imageUrl: 'https://picsum.photos/id/1028/300/200',
        },
        {
          id: 15,
          name: 'Graphic Tablet',
          description: 'Draw, design, and create with precision.',
          price: '$99.99',
          imageUrl: 'https://picsum.photos/id/1029/300/200',
        },
        {
          id: 16,
          name: 'Streaming Microphone',
          description: 'Professional audio quality for podcasts and streams.',
          price: '$59.99',
          imageUrl: 'https://picsum.photos/id/1030/300/200',
        },
        {
          id: 17,
          name: 'Portable SSD 1TB',
          description: 'Fast and secure storage on the go.',
          price: '$139.99',
          imageUrl: 'https://picsum.photos/id/1031/300/200',
        },
        {
          id: 18,
          name: 'VR Headset',
          description: 'Immerse yourself in virtual reality experiences.',
          price: '$249.99',
          imageUrl: 'https://picsum.photos/id/1032/300/200',
        },
        {
          id: 19,
          name: 'Smart Home Hub',
          description: 'Control your devices with voice and automation.',
          price: '$79.99',
          imageUrl: 'https://picsum.photos/id/1033/300/200',
        },
        {
          id: 20,
          name: 'Mini Projector',
          description: 'Bring the big screen experience anywhere.',
          price: '$119.99',
          imageUrl: 'https://picsum.photos/id/1035/300/200',
        },
      ]);
      


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt="Product Image" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
