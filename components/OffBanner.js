import React from "react";
import Link from "next/link";

function OffBanner() {
  return (
    <section className="py-5 py-md-11 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5 md:gap-4">
          <div className="col py-4">
            <Link href="course-list-v3.html" className="card   text-center  ">
              <div className="relative text-light">
                <div className="flex justify-center icon-h-p">
                  <img
                    src="/icon/ReadyMade.svg"
                    className="w-9"
                    alt="Design Icon"
                  />
                </div>
              </div>
              <div className="card-footer ">
                <h5 className="lg:text-lg md:text-md  text-sm     mt-3  ">
                  READY MADE
                </h5>
              </div>
            </Link>
          </div>

          <div className="col py-4">
            <Link href="course-list-v3.html" className="card   text-center ">
              <div className="relative text-light">
                <div className="flex justify-center icon-h-p">
                  <img
                    src="/icon/MostTrusted.svg"
                    className="w-14"
                    alt="Business Icon"
                  />
                </div>
              </div>
              <div className="card-footer  ">
                <h5 className="lg:text-lg md:text-md  text-sm     mt-3  ">
                  MOST TRUSTED
                </h5>
              </div>
            </Link>
          </div>

          <div className="col py-4">
            <Link href="course-list-v3.html" className="card   text-center ">
              <div className="relative text-light">
                <div className="flex justify-center icon-h-p">
                  <img
                    src="/icon/ExpressShipping.svg"
                    className="w-16"
                    alt="Software Development Icon"
                  />
                </div>
              </div>
              <div className="card-footer ">
                <h5 className="lg:text-lg md:text-md  text-sm     mt-3  ">
                  EXPRESS SHIPPING
                </h5>
              </div>
            </Link>
          </div>

          <div className="col py-4">
            <Link href="course-list-v3.html" className="card   text-center ">
              <div className="relative text-light">
                <div className="flex justify-center icon-h-p">
                  <img
                    src="/icon/LovedByEveryone.svg"
                    className="w-12"
                    alt="Personal Development Icon"
                  />
                </div>
              </div>
              <div className="card-footer  ">
                <h5 className="lg:text-lg md:text-md  text-sm     mt-3  ">
                  LOVED BY EVERYONE
                </h5>
              </div>
            </Link>
          </div>

          <div className="col py-4">
            <Link href="course-list-v3.html" className="card   text-center ">
              <div className="relative text-light">
                <div className="flex justify-center icon-h-p">
                  <img
                    src="/icon/BestEverDeals.svg"
                    className="w-12"
                    alt="Photography Icon"
                  />
                </div>
              </div>
              <div className="card-footer  ">
                <h5 className="lg:text-lg md:text-md  text-sm     mt-3  ">
                  BEST EVER DEALS
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffBanner;
