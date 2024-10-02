import Image from 'next/image';

export default function page() {
    return (
        <div className="container mx-auto px-2 py-16 flex md:flex-row flex-col w-full gap-4" id='OURSERVICES'>

            <div
                data-aos='fade-up'
                className='md:w-[19rem] text-center md:text-start px-2 md:px-0'>
                <h1 className="text-3xl font-bold text-primaryBlack ">Why <span className='text-primaryRed'>Choose</span> Us</h1>
                <p className="mt-4 text-sm text-gray-600">
                    We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.
                </p>
                <button className="mt-6 md:px-6 px-3 py-3 text-primaryRed border-red-500 border-[1px] hover:text-secondary rounded-md hover:bg-red-600 duration-1000">
                    Learn More
                </button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-6 pl-6 md:gap-2 items-center justify-center flex-col md:flex-row w-full">

                <div
                    data-aos='fade-up'
                    data-aos-delay='600'
                    className="md:w-[16rem] rounded-md ">
                    <div className="flex mb-4">
                        <Image
                            src="/images/icon1.png" // Replace with actual icon path
                            alt="Best Travel Agency"
                            width={40}
                            height={40}
                            className="rounded-md"
                        />
                    </div>
                    <h2 className="text-md font-bold mb-2">Best Travel Agency</h2>
                    <p className="text-gray-600 text-sm">
                        Travel experiences that provide round trip one way and multi trip services
                    </p>
                </div>
                <div
                    data-aos='fade-up'
                    data-aos-delay='900'
                    className="md:w-[16rem]  rounded-md ">
                    <div className="flex  mb-4">
                        <Image
                            src="/images/icon2.png"  // Replace with actual icon path
                            alt="Competitive Prices"
                            width={40}
                            height={40}
                            className="rounded-md"
                        />
                    </div>
                    <h2 className="text-md font-bold mb-2">Competitive Prices</h2>
                    <p className="text-gray-600 text-sm">
                        The prices reflect our dedication rating from the industry to be the values
                    </p>
                </div>
                <div
                    data-aos='fade-up'
                    data-aos-delay='1200'
                    className=" md:w-[16rem] rounded-md">
                    <div className="flex  mb-4">
                        <Image
                            src="/images/icon3.png"  // Replace with actual icon path
                            alt="Global Coverage"
                            width={40}
                            height={40}
                            className="rounded-md"
                        />
                    </div>
                    <h2 className="text-md font-bold mb-2">Global Coverage</h2>
                    <p className="text-gray-600 text-sm">
                        There is an endless round of options, tours & welcoming environment
                    </p>
                </div>
            </div>
        </div>
    );
}