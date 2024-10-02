import React from 'react';
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="py-16 bg-secondary">

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-evenly md:items-center">
                    <div
                        data-aos='fade-down'
                        className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <div className="flex items-center">
                                <Image
                                    src="/images/logo.png" // Replace with your actual logo image path
                                    alt="PITT Travels Logo"
                                    className="mr-4 md:w-52 w-40 "
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </a>
                        <p className="mt-2 text-gray-600 text-sm w-72">
                            We believe brand interaction is key in
                            communication. Real innovation and a
                            positive.
                        </p>
                        
                        <div className="mt-4 flex ">
                            <a href="#" className="mr-2 text-primaryRed">
                                <CiTwitter />
                            </a>
                            <a href="#" className="mr-2 text-primaryRed">
                                <CiInstagram />
                            </a>
                            <a href="#" className="text-primaryRed">
                                <CiYoutube />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-row space-x-8">

                        <div className="mb-6 md:mb-0">
                            <h3
                                data-aos='fade-down'
                                className="text-gray-800 font-bold mb-4">About us</h3>
                            <ul className="space-y-2">
                                <li
                                    data-aos='fade-right'
                                >
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Features
                                    </a>
                                </li>
                                <li
                                    data-aos='fade-right'
                                >
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        FAQs
                                    </a>
                                </li>
                                <li
                                    data-aos='fade-right'
                                >
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        News
                                    </a>
                                </li>
                                <li
                                    data-aos='fade-right'
                                >
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6 md:mb-0">
                            <h3 data-aos='fade-left' className="text-gray-800 font-bold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li data-aos='fade-left'>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Our values
                                    </a>
                                </li>
                                <li data-aos='fade-left'>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Partners of us
                                    </a>
                                </li>
                                <li data-aos='fade-left'>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Blog
                                    </a>
                                </li>
                                <li data-aos='fade-left'>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6 md:mb-0">
                            <h3 data-aos='fade-down' className="text-gray-800 font-bold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li data-aos='fade-down'>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Support center
                                    </a>
                                </li>
                                <li data-aos='fade-down'>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Feedback
                                    </a>
                                </li>
                                <li data-aos='fade-down'>
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Accessibility
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <form
                            data-aos='fade-up'
                            action="">
                            <div className="mb-6 md:mb-0 flex flex-col">
                                <h3 className="text-gray-800 font-bold mb-4">Get in touch</h3>
                                <input className='pb-4 outline-none py-2 bg-secondary' type="text" placeholder='Your Email Here...' />
                                <button className="bg-red-500 border-red-500 border-[1px] hover:bg-transparent hover:text-primaryRed duration-1000 text-white font-bold py-2 px-8 rounded">
                                    Get Access
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;