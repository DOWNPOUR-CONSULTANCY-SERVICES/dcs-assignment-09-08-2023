import Layout from "@/components/Navbar/Navbar";
import img from '../assets/icons/Ellipse 172.png'
import edit from '../assets/icons/Edit_light (1).png'
import Image from 'next/image';
import { poppins } from "@/font";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import system from '../assets/icons/system-outline-31-check 1.png'
import { MdOutlineModeEditOutline } from 'react-icons/md';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=' mt-24 mx-20'>
        <p className="text-xl font-medium ">My Profile</p>
        <div className="flex justify-center items-center">
          <div>
            <Image src={img} alt='img' />
            <div className="mt-[-220px] ms-[250px] bg-gray-100 border-2 border-[#B6A9A9] rounded-full z-40 w-[30px] h-[30px] flex justify-center items-center">
              <MdOutlineModeEditOutline size={20} />
            </div>
          </div>
        </div>

        <div />
      </div>
      <div className="mt-20 max-w-[500px] mx-auto">
        <form action="" className="flex flex-col gap-5">
          <div className="bg-[#D9D9D9] w-full py-4 rounded-[16px]">
            <input type="text" className="text-[20px] outline-none bg-[#D9D9D9] w-full placeholder-black px-5 " placeholder="Downpour" />
          </div>
          <div className="bg-[#D9D9D9] w-full py-4 rounded-[16px] flex justify-between pe-3">
            <input type="number" className="text-[20px] outline-none bg-[#D9D9D9] w-full placeholder-black px-5 " placeholder="+91 9999999999" />
            <Image src={system} alt="img" className="w-[30px] " />
          </div>
          <div className="bg-[#D9D9D9] w-full py-4 rounded-[16px]">
            <input type="email" className="text-[20px] outline-none bg-[#D9D9D9] w-full placeholder-black px-5 " placeholder="demo@email.com" />
          </div>
        </form>
        <p className="text-center mt-5 text-[#747474]">Downpour Consultancy Services Assignment </p>
      </div>
    </div>
  )
}
