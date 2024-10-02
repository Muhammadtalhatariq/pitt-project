"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function page() {
    return (
        <div
            data-aos='fade-up'
         
            className="bg-secondary py-20 w-full " id='ABOUTUS'>
            <div className="container mx-auto px-2 ">
                <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
                    <div
                     data-aos='fade-up'
                    className="md:w-1/2  flex items-center justify-center w-full">
                        <Image
                            src="/images/img1.png"
                            alt="Mountain beach sunset"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2 w-full text-center md:text-start">
                        <h5  data-aos='fade-up' className='text-primaryRed pt-4'>About us</h5>
                        <h1  data-aos='fade-up' className="text-5xl font-bold text-gray-800 mb-4">
                            The Best And Most trusted  <span className="text-primaryRed">service</span>
                        </h1>
                        <p  data-aos='fade-up' className="text-gray-600 mb-6 px-2">
                            We are the largest holiday service provider in the world with
                            partners and places spread all over the world to prioritizing service
                            and customer satisfaction.
                        </p>
                        <button  data-aos='fade-up' className="bg-red-500 border-red-500 border-[1px] hover:bg-transparent hover:text-primaryRed duration-1000 text-white font-bold py-2 px-8 rounded">
                            Learn More
                        </button>
                        <div  data-aos='fade-up' className="flex flex-wrap md:flex-nowrap flex-row items-center justify-center mt-12">
                            <div className=" p-2 rounded-lg shadow-md mx-2 md:mx-4">
                                <h3 className="text-4xl font-bold text-primaryRed mb-2">
                                    200+
                                </h3>
                                <p className="text-gray-600 text-sm">Customers & Partners</p>
                            </div>
                            <div className="p-2 rounded-lg shadow-md mx-2 md:mx-4">
                                <h3 className="text-4xl font-bold text-primaryRed  mb-2">
                                    500+
                                </h3>
                                <p className="text-gray-600">Places in The World</p>
                            </div>
                            <div className=" p-2 rounded-lg shadow-md mx-2 md:mx-4">
                                <h3 className="text-4xl font-bold text-primaryRed  mb-2">
                                    1k+
                                </h3>
                                <p className="text-gray-600">Success Journey</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}