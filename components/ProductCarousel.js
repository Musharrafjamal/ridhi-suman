import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiTwotoneThunderbolt } from "react-icons/ai";

function ProductCarousel() {
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [slideHeight, setSlideHeight] = useState(190); // Default height for non-mobile views

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth > 1280) {
        setVisibleSlides(4);
        setSlideHeight(190);
      }else if(window.innerWidth>1024){
        setVisibleSlides(4);
        setSlideHeight(240);
      }
       else if (window.innerWidth >= 768) {
        setVisibleSlides(3);
        setSlideHeight(240);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(2);
        setSlideHeight(220);
      } else {
        setVisibleSlides(1);
        setSlideHeight(240); // Mobile view height
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const products = [
    {
      id: 1,
      image: "/category/download (1).jpg",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120 left",
      category: "Salwar Kameez",
    },
    {
      id: 2,
      image: "/category/download (2).jpg",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120 left",
      category: "Salwar Kameez",
    },
    {
      id: 3,
      image: "/category/image1.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120 left",
      category: "Salwar Kameez",
    },
    {
      id: 4,
      image: "/category/image2.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120 left",
      category: "Salwar Kameez",
    },
    {
      id: 5,
      image: "/category/image3.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120 left",
      category: "Salwar Kameez",
    },
  ];

  return (
    <div className="relative lg:pt-4 lg:pb-0 p-4 bg-gray-50">
      <h2 className="text-2xl flex gap-2 sm:text-4xl font-extrabold text-black font-[Aclonica] leading-tight mb-4 sm:mb-8">
        MOST BOOKED SAREES
        <AiTwotoneThunderbolt className="text-orange-500" />
      </h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={slideHeight}
        totalSlides={products.length}
        visibleSlides={visibleSlides}
        isPlaying={true}
        interval={5000}
        infinite={true}
      >
        <Slider>
          {products.map((product, index) => (
            <Slide index={index} key={product.id}>
              <div className="flex flex-col items-center m-2 bg-white rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[32rem] object-cover rounded-t-lg"
                />
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
                        className="bg-gradient-to-r w-9/10 from-red-500 to-orange-500 h-2.5 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                      <span className="ml-2 text-gray-500 text-sm">
                        {product.sales}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default ProductCarousel;
