import React from 'react';
import Slider from "react-slick";

const TestomonialsData = [
    {
        id: 1,
        name: "Victor",
        text: "Amazing product! Highly recommend it to everyone.",
        img: "https://picsum.photos/id/237/200/300",
    },
    {
        id: 2,
        name: "Satya",
        text: "Great service and excellent quality!",
        img: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        name: "Virat Vikram",
        text: "I'm thoroughly impressed with the experience.",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        id: 4,
        name: "Kachra Seth",
        text: "Absolutely wonderful! Worth every penny.",
        img: "https://picsum.photos/200/300",
    },
    {
        id: 5,
        name: "Lalit Buraria",
        text: "Exceptional quality and fast delivery.",
        img: "https://picsum.photos/200/300",
    },
];

export const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        What our customers are saying
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Hear from our happy customers.
                    </p>
                </div>
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestomonialsData.map((data) => (
                            <div key={data.id} className="my-6">
                                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                                    <div className="mb-4 flex justify-center">
                                        <img
                                            src={data.img}
                                            alt={data.name}
                                            className="rounded-full w-20 h-20 object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3 text-center">
                                            <p className="text-xs dark:text-slate-300 text-gray-500">
                                                {data.text}
                                            </p>
                                            <h1 className="text-xl font-bold dark:text-slate-300 text-black/80">
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
