import React from 'react';
import Img1 from "../../assets/shirt1.webp";
import Img2 from "../../assets/shirt2.jpg";
import Img3 from "../../assets/shirt3.webp";
import { FaStar } from "react-icons/fa"; // Corrected import

const ProductsDAta = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Comfortable and stylish casual wear for every occasion.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirts",
        description: "Vibrant and trendy printed shirts to make a statement.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women Shirts",
        description: "Elegant women shirts for both formal and casual outings.",
    },
];

const TopProduct = ({ handleOrderPopup }) => {
    return (
        <div className="container">
            <div className="text-left mg-24">
                <p data-aos="fade-up" className="text-sm text-primary">
                    Top Rated Products for You
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                    Best Products
                </h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                    Explore our top-rated products handpicked just for you.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                {ProductsDAta.map((data) => (
                    <div
                        key={data.id} // Added a unique key for each product
                        data-aos="zoom-in"
                        className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                    >
                        <div>
                            <img
                                src={data.img}
                                alt={data.title}
                                className="max-w-[140px] block mx-auto transform-translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center gap-1 mt-2">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                        <h1 className="text-xl font-bold mt-2">{data.title}</h1>
                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mt-2">
                            {data.description}
                        </p>
                        <button
                            className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                            onClick={handleOrderPopup}
                        >
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopProduct;
