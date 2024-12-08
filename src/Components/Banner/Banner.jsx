import React from "react";
import BannerImg from "../../assets/banner4.webp";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="flex flex-col">
      {/* Image Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-6xl font-bold text-white"
          >
            Winter Sale upto 50% off
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-900 px-4 py-8 sm:py-16">
        <div className="container mx-auto">
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 dark:text-gray-300 tracking-wide leading-7 mb-8"
          >
            Discover the best quality products at unbeatable prices. Our winter
            sale is here to make your shopping experience exceptional!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GrSecure className="text-5xl h-14 w-14 shadow-md p-3 rounded-full bg-violet-100 dark:bg-violet-400" />
              <p>Quality Product</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <IoFastFood className="text-5xl h-14 w-14 shadow-md p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Fast Delivery</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-5xl h-14 w-14 shadow-md p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Easy Payment Methods</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-5xl h-14 w-14 shadow-md p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Exclusive Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
