"use client"
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const page = () => {
    return (
        <div className="container mx-auto py-16" id='CONTACT'>
            <h2 
             data-aos='fade-up'
            className="text-4xl font-bold mb-8 text-center text-primaryRed">Contact Us</h2>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center flex-wrap gap-20'>
                    <div
                     data-aos='fade-up'
                    className='bg-Primary shadow-xl rounded-lg p-8'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='size-10 bg-primaryRed rounded-lg  my-4 flex justify-center items-center'>
                                <FaWhatsapp className='text-white ' size={30} />
                            </div>
                            <div className='text-sm flex '>
                                Whastapp :  <p className='text-blue-400 underline cursor-pointer'>  +92 300 5122863</p>
                            </div>
                        </div>
                    </div>
                    <div  data-aos='fade-up'
                               className='bg-Primary shadow-xl rounded-lg p-8 '>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='size-10 bg-primaryRed rounded-lg  my-4 flex justify-center items-center'>
                                <FaPhoneAlt size={25} className='text-white' />
                            </div>
                            <div className='text-sm flex'>
                                Phone No :  <p className='text-blue-400 underline cursor-pointer'>  +92 300 5510000</p>
                            </div>
                        </div>

                    </div>
                    <div
                     data-aos='fade-up'
        
                    className='bg-Primary shadow-xl rounded-lg p-8 '>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='size-10 bg-primaryRed rounded-lg   my-4 flex justify-center items-center'>
                            <AiOutlineMail size={30} className='text-white'/>
                            </div>
                            <div className='text-sm flex'>
                                Gmail :  <p className='text-blue-400 underline cursor-pointer'> pitt.pakistan@gmail.com </p>
                            </div>
                        </div>

                    </div>
                    <div
                     data-aos='fade-up'
                               
                    className='bg-Primary shadow-xl rounded-lg  p-8 mx-4'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className='size-10 bg-primaryRed  rounded-lg  my-4 flex justify-center items-center'>
                            <FaLocationDot size={30} className='text-white'/>
                            </div>
                            <div className='text-sm flex px-2'>
                                Location: <p className='text-blue-400 text-center cursor-pointer'>  Office No. 30, Wali Center, Blue Area Islamabad Pakistan </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;