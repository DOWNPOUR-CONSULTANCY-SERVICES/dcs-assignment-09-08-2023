import React from 'react';
import google from '../assets/icons/Component 2.png'
import facebook from '../assets/icons/Component 3.png'
import Image from 'next/image';
import Link from 'next/link';

const register = () => {
    return (
        <div className='pt-12'>
            <div className='flex justify-center items-center'>
                <div className='font-normal text-center '>
                    <p className='text-[26px] '>Downpour Consultancy Services Assignment</p>
                    <p className='text-[26px] mt-5'>Register Yourself</p>

                </div>
            </div>
            <div className=' max-w-[400px] mx-auto'>


                <form className='mx-8 lg:mx-0 tracking-[1.7px] mt-3'>
                    <div>
                        <p className='text-[#7D7D7D] font-normal text-[13px] ms-3 lg:hidden'>Name</p>
                        <input type="text" className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-[18px] lg:text-black lg:h-[50px] lg:ps-6 lg:mt-3 placeholder-black' placeholder='Jyotirmoy Mondal' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] font-normal text-[13px] ms-3 lg:hidden'>Phone</p>
                        <input type="number" className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-[18px] lg:text-black lg:h-[50px] lg:ps-6 lg:mt-3 placeholder-black' placeholder='+91 86531 38715' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] font-normal text-[13px] ms-3 lg:hidden'>Email</p>
                        <input type="email" className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-[18px] lg:text-black lg:h-[50px] lg:ps-6 lg:mt-3 placeholder-black' placeholder='example@gmail.com' />
                    </div>
                    <div className='flex justify-center items-center my-5'>
                        <button className='text-[20px] h-[45px] text-[#FFFFFF] bg-[#444242] lg:bg-[#303030] px-5 rounded-[7px]'>
                            Verify and Register
                        </button>
                    </div>
                    <div >
                        <p className='text-[#858585] text-[15px] font-normal lg:text-center mt-2 lg:text-[14px] lg:text-black'>Already have an account? <Link href='/' className='text-[#303030] lg:text-black font-bold'>Login</Link></p>
                    </div>
                    <div className='lg:max-w-screen-sm mx-auto lg:mx-20'>
                        <div className='flex justify-center items-center gap-2 mt-2'>
                            <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
                            <p className='text-[12px]'>OR</p>
                            <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
                        </div>
                    </div>
                </form>
                <div>
                    <p className='text-center text-[#222222] text-[14px] font-normal lg:text-[16px]'>Continue With</p>
                    <div className='flex justify-center items-center gap-3  mb-16 mt-2'>
                        <button className='w-[43px] h-[43px] lg:w-[45px] lg:h-[45px] rounded-[12px] bg-[#1B1919] flex justify-center items-center p-2'>
                            <Image src={google} alt='google' />
                        </button>
                        <button className='w-[43px] h-[43px] lg:w-[45px] lg:h-[45px] rounded-[12px] bg-[#1B1919] flex justify-center items-center p-2'>
                            <Image src={facebook} alt='facebook' className='w-[20px] h-[30px]' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default register;