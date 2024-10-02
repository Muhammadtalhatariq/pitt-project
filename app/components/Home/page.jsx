import Image from 'next/image';
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

export default function Home() {
  return (
    <div className="min-h-screen w-full py-8 md:py-16 md:pt-28 " id='HOME'>
      <div className="container mx-auto px-4 mt-20">
        <div className='flex flex-col md:flex-row '>
          <div className='md:w-1/2 w-full'>
            <div
              className="md:text-5xl text-3xl text-center md:text-start font-bold text-gray-800 mb-4">
              <div
                data-aos='fade-down'
                data-aos-delay='1200'
              > It's a Big World</div>

              <span
                data-aos='fade-up'
                data-aos-delay='1400'
              > Out There, Go</span>

              <br />
              <p data-aos='fade-up' data-aos-delay='1500' className="text-red-500">Explore</p>
            </ div>
          </div>

          <div className="w-full md:w-1/2 px-7 space-y-3 text-center md:text-start">
            <p
              data-aos='fade-down'
              data-aos-delay='1200'
              className="text-gray-600 ">
              Time Tracking Software Used By Millions. A Simple Time
              Tracker And Spreadsheet App That Lets You Track Work Hours
              Across Projects...
            </p>

            <button
              data-aos='fade-up'
              data-aos-delay='1200'
              className="bg-red-500 border-red-500 border-[1px] hover:bg-transparent hover:text-primaryRed duration-1000 text-white font-bold py-2 px-8 rounded-full">
              Discover Now
            </button>
          </div>
        </div>
        <div className='flex relative pt-4'>
          <div className="flex justify-center">
            <video
              data-aos='fade-up'
              data-aos-delay='2000'
              controls
              autoPlay
              loop
              alt="Woman overlooking a beach with a tropical island in the background"
              width={1024}
              height={768}
              className="rounded-lg shadow-lg z-10 cursor-pointer outline-none"
              src="/images/video.mp4" >

            </video>
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='1000'
            data-aos-duration='800'
            className="md:mt-60 absolute md:-right-40 hidden lg:flex ">
            <div className="text-primarybtn flex justify-center items-center md:rotate-90  gap-10">
              <p className=" text-lg w-24">Follow Us</p>
              <div className='w-[1px] h-20 bg-primarybtn rotate-90'></div>
              <ul className=" ml-4 flex justify-center items-center ">
                <li className='list-none'> <CiTwitter /> </li>
                <l className='list-none' ><CiInstagram /></l>
                <li className='list-none'><CiYoutube /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
