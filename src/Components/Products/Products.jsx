import React from 'react'
import Img1 from "../../assets/women1.jpg"
import Img2 from "../../assets/women2.png"
import Img3 from "../../assets/women3.webp"
import Img4 from "../../assets/women4.jpg"
import {FaStar} from "react-icons/fa6";

const ProductsData =[
    {
        id : 1,
        img: Img1,
        title: "Women Ethics",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id : 2,
        img: Img2,
        title: "Women western",
        rating: 4.0,
        color: "Red",
        aosDelay: "200",
    },
    {
        id : 3,
        img: Img3,
        title: "Googles",
        rating: 4.5,
        color: "Brown",
        aosDelay: "400",
    },
    {
        id : 4,
        img: Img4,
        title: "Women Ethics",
        rating: 4.7,
        color: "Yello",
        aosDelay: "600",
    },
    {
        id : 2,
        img: Img2,
        title: "Women Ethics",
        rating: 4.2,
        color: "Black",
        aosDelay: "800",
    },

]
export const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up"className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'> Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>dfvbjkm rsdtfyu efghj rrtuij rexfgvhbr yujh ttyuj fghj rty  </p>
        </div>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {ProductsData.map((data)=>(
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id}
                    className='space-y-3'>
                        <img src={data.img} alt='Cover image' className='h-[220px] w-[150px] object-cover rounded-md' />
                     <div> 
                        <h3 className='font-semibold'>{data.title}
                        </h3>
                        <p className='text-sm text-gray-600'>{data.color}</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yello-400'/>
                            <span>{data.rating}</span>
                        </div>
                        </div>   
                    </div>
                ))}

            </div>
            <div className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All button</button>
            </div>
        </div>
    </div>
  )
}
