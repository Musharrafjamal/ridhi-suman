"use client";
import Nav from "@/components/Nav";
import Footer from "../components/footer";
import OffBanner from "@/components/OffBanner";
import Testimonial from "../components//testimonial";
import Category from "../components/category";
import ProductCarousel from "../components/ProductCarousel";

export default function Home() {
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
          <div className="flex flex-wrap lg:gap-6 md:gap-4 gap-3 z-30 text-gray-600">
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
      <Category />
      {/* <OffBanner /> */}
      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      <Testimonial />
      <Footer />
    </main>
  );
}
