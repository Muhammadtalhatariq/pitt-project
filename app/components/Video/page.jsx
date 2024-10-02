"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const page = () => {

    const works = [
        { id: 1, image: "/images/blog2.png" },
        { id: 2, image: "/images/blog1.png" },
        { id: 3, image: "/images/blog3.png" },
        { id: 4, image: "/images/blog2.png" },
        { id: 5, image: "/images/blog1.png" },
        { id: 6, image: "/images/blog2.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerRow, setItemsPerRow] = useState(3); // Default: 3 items for larger screens

    // Dynamically update itemsPerRow based on screen size
    useEffect(() => {
        const updateItemsPerRow = () => {
            if (window.innerWidth <= 768) {
                setItemsPerRow(1); // 1 item for small screens
            } else if (window.innerWidth <= 1024) {
                setItemsPerRow(2); // 2 items for medium screens
            } else {
                setItemsPerRow(3); // 3 items for large screens
            }
        };

        updateItemsPerRow(); // Call function on mount
        window.addEventListener("resize", updateItemsPerRow); // Listen for window resize

        return () => window.removeEventListener("resize", updateItemsPerRow); // Cleanup
    }, []);

    const maxIndex = works.length - itemsPerRow;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const slideStyle = {
        transform: `translateX(-${currentIndex * (100 / itemsPerRow)}%)`,
        transition: "transform 0.5s ease-in-out",
    };

    return (
        <section className="section py-10 overflow-hidden md:mx-20 " >
            <div className="container mx-auto px-2 w-full max-w-full">
                {/* Slider Navigation */}
                <div className="flex justify-between items-center mb-4 px-4">
                    <button
                        // data-aos='fade-right'
                        type="button"
                        className="owl-prev p-2"
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        // data-aos='fade-left'
                        type="button"
                        className="owl-next p-2"
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        style={{ opacity: currentIndex >= maxIndex ? 0.5 : 1 }}
                    >
                        <ArrowRight />
                    </button>
                </div>

                {/* Slider Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex justify-between mx-2" style={slideStyle}>
                        {works.map((work, id) => (
                            <div
                                key={id}
                                className=" flex justify-center items-center"
                                style={{
                                    flex: `0 0 ${100 / itemsPerRow}%`, // Dynamically adjust width
                                    transition: "flex 0.5s ease-in-out",
                                }}
                            >
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration="200"
                                    className="p-2 flex justify-center items-center">
                                    <img
                                        src={work.image}
                                        alt={`Slide ${id}`}
                                        layout="responsive"
                                        className={` object-cover rounded-lg  ${id === currentIndex
                                            ? ' sm:w-96 sm:h-80 sm:opacity-100 w-96 h-80 opacity-100 md:w-96 md:h-80 md:opacity-100 lg:opacity-50 lg:w-60 lg:h-40'
                                            : id === currentIndex + 1 || id === work.length + 1
                                                ? ' sm:w-96 sm:h-80 sm:opacity-100  w-60 h-40 opacity-50'
                                                : 'sm:w-60 sm:h-40 sm:opacity-50 '
                                            } transition duration-500`}
                                    >

                                    </img>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
