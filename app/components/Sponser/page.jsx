'use client'

const items = [
    {
        id: 1,
        img: '/images/pact.png',
        aosdelay: 0
    },
    {
        id: 2,
        img: '/images/ufone.png',
        aosdelay: 200
    },
    {
        id: 3,
        img: '/images/zong.png',
        aosdelay: 400
    },
    {
        id: 4,
        img: '/images/oxford.png',
        aosdelay: 600
    },
    {
        id: 5,
        img: '/images/osfam.png',
        aosdelay: 800
    },
    {
        id: 6,
        img: '/images/ici.png',
        aosdelay: 1000
    },
    {
        id: 7,
        img: '/images/britsh.png',
        aosdelay: 1200
    },
    {
        id: 8,
        img: '/images/genix.png',
        aosdelay: 1400
    },
    {
        id: 8,
        img: '/images/getz.png',
        aosdelay: 1600

    },
]

export default function page() {
    return (
        <>
            <div className='my-16'>
                <h2
                    data-aos='fade-down'
                    className='text-4xl text-primaryRed font-bold text-center'> Our Clients </h2>
                <div className="flex justify-center items-center flex-wrap gap-20 pt-16">
                    {items.map((item) => (
                        <div
                            data-aos='fade-up'
                            data-aos-delay={item.aosdelay}
                            key={item.id} className="flex flex-col items-center w-28 h-20">
                            <img src={item.img} alt="abc" srcset="" className='w-full h-full' />

                        </div>
                    ))}

                </div>
            </div>

        </>


    );
}