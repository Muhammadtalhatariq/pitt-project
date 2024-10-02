"use client"
import Image from 'next/image';
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io";
// Mock data (replace with a real data fetching solution)

const destinations = [
    {
        id: 1,
        name: 'Murree',
        imageUrl: ['/images/gallery1.png', '/images/blog1.png', '/images/blog2.png', '/images/blog1.png', '/images/blog3.png'],
        country: 'Pakistan',
        description: 'The permanent town of Murree was constructed at Sunnybank in 1853. The church was sanctified in May 1857, and the main road, Jinnah Road, originally known as Mall Road and still commonly referred to as "The Mall"), was built. The most significant commercial establishments, the Post Office, general merchants with European goods, tailors and a millinery, were established opposite the church. Until 1947, access to Mall Road was restricted for "natives" (non-Europeans).',
    aosdelay : 0
    },
    {
        id: 2,
        name: 'Kashmir Keran Valley',
        imageUrl: ['/images/blog3.png', '/images/blog1.png', '/images/blog2.png'],
        country: 'Pakistan',
        description: 'A vibrant region known for its culture and beaches.',
        aosdelay : 300
    },
    {
        id: 3,
        name: 'Kashmir baboon Valley',
        imageUrl: ['/images/gallery1.png', '/images/blog1.png', '/images/blog3.png'],
        country: 'Pakistan',
        description: 'A vibrant region known for its culture and beaches.',
        aosdelay : 600
    },
    {
        id: 4,
        name: 'Skardu',
        imageUrl: ['/images/gallery1.png', '/images/blog1.png', '/images/blog2.png', '/images/blog1.png', '/images/blog3.png'],
        country: 'Pakistan',
        description: 'A vibrant region known for its culture and beaches.',
        aosdelay : 900
    },

    // Add other destination details here...
];


export default function DestinationDetails({ params }) {
    const { id } = params; // Get the destination ID from the URL params

    // Find the destination that matches the ID
    const destination = destinations.find(dest => dest.id === parseInt(id));

    if (!destination) {
        return <p>Destination not found.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-16 overflow-hidden md:pb-20">
            <Link  data-aos= 'fade-down' data-aos-duration= '500' href={`/`}>
                <div className='text-xl bg-primary p-2  shadow-md w-48 flex justify-center items-center gap-1 rounded-3xl'> <IoIosArrowBack size={25}/> back to home</div>
            </Link>
            <h1 data-aos='fade-up' className="text-4xl font-bold mb-4 text-center py-6 text-primaryRed">{destination.name}</h1>
            <div className='flex gap-4 flex-wrap justify-center '>
                {destination.imageUrl.map((img, i)=> (

                    <Image 
                  
                    className='rounded-2xl hover:scale-105 hover:opacity-60' src={img} alt={i} width={400} height={400} />
                ))}
            </div>
            <div className='bg-secondary md:px-20 px-4 md:mt-10 mt-4 p-2 py-10'>
                <p data-aos='fade-up' className="mt-4 text-lg ">{destination.description}</p>
                <p  data-aos='fade-up' className="text-sm text-gray-600 font-bold ">Location: {destination.country}</p>
            </div>

        </div>
    );
}