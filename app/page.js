"use client";
import Nav from "@/components/Nav";
import Footer from "../components/footer";
import OffBanner from "@/components/OffBanner";
import Testimonial from "../components//testimonial";
import Category from "../components/category";
import { useState, useEffect } from "react";
import ProductCarousel from "../components/ProductCarousel";
import ProductList from "../components/ProductList";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Home() {
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(1);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(1);
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
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 2,
      image: "/category/download (2).jpg",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 3,
      image: "/category/image1.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 4,
      image: "/category/image2.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
    {
      id: 5,
      image: "/category/image3.png",
      title: "Drashti Dhami Beige Embroidered Anarkali Suit Party Wear",
      originalPrice: "₹2000.00",
      discountedPrice: "₹1000.00",
      discount: "-50%",
      sales: "120_left",
      category: "Salwar Kameez",
    },
  ];
  return (
    <main>
      <Nav />
      <div className="overflow-x-hidden bg-[#FF512F] py-1 w-full">
        <div className=" animate-marquee whitespace-nowrap ">
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            2
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            3
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            4
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            5
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            6
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            7
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            8
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            9
          </span>
          <span className="text-md text-white mx-4">
            Free shipping on orders INR 1499 | 25000+ Designs I Made To Measure
            10
          </span>
        </div>
      </div>
      <div className="border-b">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-2">
          <div className="flex flex-wrap lg:gap-6 md:gap-4 gap-3  z-30 text-gray-600">
            <span className="text-black">Categories :</span>
            <a href="#" className="hover:text-orange-500">
              Sarees
            </a>
            <a href="#" className="hover:text-orange-500">
              Lehengas
            </a>
            <a href="#" className="hover:text-orange-500">
              Suits
            </a>
            <a href="#" className="hover:text-orange-500">
              Kurtis
            </a>
            <a href="#" className="hover:text-orange-500">
              Dupatta
            </a>
            <a href="#" className="hover:text-orange-500">
              Chunni
            </a>
            <a href="#" className="hover:text-orange-500">
              Accessories
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 lg:pt-3 lg:pr-3 lg:pl-3 pt-2 pl-2">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={98}
            totalSlides={products.length}
            visibleSlides={visibleSlides}
            isPlaying={true}
            interval={5000}
            infinite={true}
          >
            <Slider>
              {products.map((product, index) => (
                <Slide index={index} key={product.id}>
                  <div className="flex flex-col items-center bg-white rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full lg:h-[30rem] md:h-80   object-cover rounded-t-lg"
                    />
                  </div>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
        <div className="w-3/4 p-3 ">
          <img
            src="/category/hero-banner.jpg" // Update the path here
            className="  rounded-lg"
            alt="Salwar Kameez Banner"
          />
        </div>
      </div>

      <Category />
      <ProductList />
      <OffBanner />

      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      <div className="flex w-full">
      <div className="w-1/3">
        <img
          src="/category/bottom (3).svg" // Update the path here
          className="object-cover w-full h-full"
          alt="Salwar Kameez Banner"
        />
      </div>
      <div className="w-1/3">
        <img
          src="/category/bottom (3).svg" // Update the path here
          className="object-cover w-full h-full"
          alt="Saree Banner"
        />
      </div>
      <div className="w-1/3">
        <img
          src="/category/bottom (3).svg" // Update the path here
          className="object-cover w-full h-full"
          alt="Lehenga Banner"
        />
      </div>
    </div>
      <Testimonial />
      <Footer />
    </main>
  );
}
