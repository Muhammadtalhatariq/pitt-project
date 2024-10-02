"use client"
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const nevItems = [
    {
        name: "HOME",
        path: "#HOME",
        aosdelay : "0",
    },
    {
        name: "ABOUT US",
        path: "#ABOUTUS",
        aosdelay : "200",
    },
    // {
    //     name: "TOUR PACKAGES",
    //     path: "#TOURPACKAGES",
    //     aosdelay : "400",
    // },
    {
        name: "GALLERY",
        path: "#GALLERY",
        aosdelay : "400",
    },
    {
        name: "OUR SERVICES",
        path: "#OURSERVICES",
        aosdelay : "600",
    },
    {
        name: "CONTACT",
        path: "#CONTACT",
        aosdelay : "800",
    },
];

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-Primary ">
            <Head>
                <title>PITT Travels</title>
                <meta name="description" content="Pakistan International Travels & Tours" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className=" w-full">
                <div className="container mx-auto bg-white fixed z-50 flex items-center justify-between gap-20 px-6 lg:px-32">
                    <div 
                    data-aos= 'fade-down'

                    className="flex items-center pt-3 md:pt-0">
                        <Image
                            src="/images/logo.png"  // Replace with your actual logo image path
                            alt="PITT Travels Logo"
                            width={100}
                            height={100}
                            className="mr-4 md:w-60 w-40 "
                        />
                    </div>
                    <div className='flex'>
                        <nav className="hidden lg:flex space-x-6 z-50">
                            {nevItems.map((item) => (
                                <li
                                data-aos= "fade-down"
                                data-aos-delay={item.aosdelay}
                                    className="hover:text-primaryRed hover:border-b-2 border-primaryRed duration-200 list-none"
                                    key={item.path}
                                >
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            ))}
                            {/* <a href="#">
                                <div className="hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </a> */}
                        </nav>
                        <button 
                        data-aos ='fade-right'
                        className="lg:hidden flex" onClick={handleMenuToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                 {/* mbl view  */}
                <div>
                    {isMenuOpen && (
                        <div className="fixed z-50 mih-h-screen w-full list-none gap-5 p-3 bg-secondary text-black top-10 left-0 animate-slide-down">
                            <ul className=" flex flex-col items-center gap-10">
                                {nevItems.map((item) => (
                                    <li
                                    data-aos= 'fade-down'
                                    data-aos-delay={item.aosdelay}
                                        className="hover:text-primaryRed duration-1000"
                                        key={item.path}
                                    >
                                        <a href={item.path}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}