"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function page() {

    const destinations = [
        {
            id: 1,
            name: 'Murree',
            imageUrl: '/images/blog3.png',
            country: 'Pakistan',
            aosdelay: 0,
        },
        {
            id: 2,
            name: 'Kashmir Keran Valley',
            imageUrl: '/images/blog2.png',
            country: 'Pakistan',
            aosdelay: 300,
        },
        {
            id: 3,
            name: 'Kashmir baboon Valley',
            imageUrl: '/images/blog3.png',
            country: 'Pakistan',
            aosdelay: 600,
        },
        {
            id: 4,
            name: "Skardu",
            imageUrl: '/images/gallery1.png',
            country: 'Pakistan',
            aosdelay: 900,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8" id="GALLERY">
            <h2
                data-aos='fade-right'
                className="text-4xl font-bold text-center mb-8 text-primaryRed">
                Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinations.map((item) => (
                    <Link
                        data-aos='fade-up'
                        data-aos-delay={item.aosdelay}
                        key={item.id}
                        href={`/destinations/${item.id}`} // Link to dynamic page
                    >
                        <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                            <div className="relative h-48 rounded-md overflow-hidden ">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.country}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}