import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function CategoryCarousel() {
  return (
    <div className="relative p-4 sm:p-8 bg-gray-50">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#0052D4] font-[Aclonica] leading-tight mb-4 sm:mb-8">
        Categories you may like
      </h2>
      <CarouselProvider
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={3}
        isPlaying={true}
        interval={5000}
        infinite={true}
      >
        <Slider>
          <Slide index={0}>
            <div className="flex flex-wrap justify-center">
              <div className=" w-1/3 flex flex-col items-center p-2 ">
                <img
                  src="/category/download (1).jpg"
                  alt="Lehenga Choli"
                  className="rounded-full  lg:w-96 object-cover  md:w-80 md:h-80 sm:h-48 lg:h-96  h-28"
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Lehenga Choli
                </p>
              </div>
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (2).jpg"
                  alt="Saree"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Saree
                </p>
              </div>
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (3).jpg"
                  alt="Salwar_Kameez"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Salwar_Kameez
                </p>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="flex flex-wrap justify-center">
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (1).jpg"
                  alt="Lehenga Choli"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Lehenga Choli
                </p>
              </div>
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (2).jpg"
                  alt="Saree"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Saree
                </p>
              </div>
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (3).jpg"
                  alt="Salwar_Kameez"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Salwar_Kameez
                </p>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="flex flex-wrap justify-center">
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (1).jpg"
                  alt="Lehenga Choli"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Lehenga Choli
                </p>
              </div>
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (2).jpg"
                  alt="Saree"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Saree
                </p>
              </div>
              <div className=" w-1/3 flex flex-col items-center p-2">
                <img
                  src="/category/download (3).jpg"
                  alt="Salwar_Kameez"
                  className="rounded-full  lg:w-96 w-full md:w-80 object-cover md:h-80 sm:h-48 lg:h-96  h-28  "
                />
                <p className="lg:text-lg md:text-md  text-sm font-bold mt-2 sm:mt-4 font-[Aclonica]">
                  Salwar_Kameez
                </p>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default CategoryCarousel;
