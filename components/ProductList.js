import React from "react";

const products = [
  {
    id: 1,
    category: "New Arrival",
    discount: "50% OFF",
    title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
    originalPrice: "₹2000.00",
    discountedPrice: "₹1000.00",
    sales: "120 Sold",
    images: ["/category/download (1).jpg"], // 1 image
  },
  {
    id: 2,
    category: "Best Seller",
    discount: "40% OFF",
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    sales: "200 Sold",
    images: ["/category/download (1).jpg", "/category/download (2).jpg"], // 2 images
  },
  {
    id: 3,
    category: "Best Seller",
    discount: "40% OFF",
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    sales: "200 Sold",
    images: [
      "/category/download (1).jpg",
      "/category/download (2).jpg",
      "/category/image1.png",
    ], // 3 images
  },
  {
    id: 4,
    category: "Best Seller",
    discount: "40% OFF",
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    sales: "200 Sold",
    images: [
        "/category/image1.png",
        "/category/image2.png",
        "/category/image3.png",
        "/category/download (1).jpg",
    ], // 4 images
  },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  const renderImages = (images) => {
    const imageWidthClass =
      {
        1: "w-full",
        2: "w-1/2",
        3: "w-1/3",
        4: "w-1/4",
      }[images.length] || "w-full";

    return (
      <div className="flex items-center w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className={`object-cover mb-2 h-[32rem] ${imageWidthClass}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg  w-full">
      {renderImages(product.images)}
      <div className="p-4 flex flex-col items-start w-full">
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-white bg-purple-500 text-xs font-semibold px-2 py-1 rounded">
            {product.category}
          </span>
          <span className="text-red-500 bg-pink-100 text-xs font-semibold px-2 py-1 rounded">
            {product.discount}
          </span>
        </div>
        <h3 className="text-lg font-bold mt-2">{product.title}</h3>
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-gray-500 line-through">
            {product.originalPrice}
          </span>
          <span className="text-red-500 font-bold">
            {product.discountedPrice}
          </span>
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <div className="w-full flex justify-between items-center bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r  from-red-500 to-orange-500 h-2.5 rounded-full"
              style={{ width: "50%" }}
            ></div>
            <span className="ml-2 text-gray-500 text-sm">{product.sales}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl lg:text-4xl font-[Aclonica] text-[#11998E] font-bold my-4">
        Most loved sets of product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
