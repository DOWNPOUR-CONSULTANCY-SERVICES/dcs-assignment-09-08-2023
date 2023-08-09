import React from 'react';
import google from '../assets/icons/Component 2.png'
import facebook from '../assets/icons/Component 3.png'
import Image from 'next/image';
import Link from 'next/link';
import { poppins } from '@/font';

const login = () => {
    return (
        <div className={poppins.className}>
            <div className='flex justify-center items-center h-full pt-16 lg:pt-10 w-full'>
                <div className=' lg:pt-12'>
                    <div className='font-normal text-center '>
                        <p className='text-[26px] '>Downpour Consultancy Services Assignment</p>
                        <p className='text-[26px] mt-5'>Login</p>
                        <p className='text-[20px] mt-5 text-[#747474]'>Login with your phone number using an otp</p>
                    </div>
                    <div className=' max-w-[400px] mx-auto'>

                        <form className='mx-8 lg:mx-0 tracking-[1.7px] mt-12 mb-2'>

                            <div>
                                <p className='text-[#747474] font-normal text-[13px] ms-3 lg:text-[16px]'> Mobile Numberr</p>
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    className='outline-none h-[43px] px-3 bg-[#E9E9E9] w-full rounded-[9px] mt-1 lg:text-black lg:text-[15px] lg:h-[50px] placeholder-black'
                                    placeholder='+91 86531 38715'

                                    style={{ '-moz-appearance': 'textfield' }}
                                />

                            </div>

                            <div className='flex justify-center items-center mt-8'>
                                <button className='text-[18px] lg:text-[22px] lg:w-[180px] lg:h-[50px] text-[#FFFFFF] bg-[#444242] lg:bg-[#303030] w-[115px] h-[41px] rounded-[7px]'>
                                    <Link href='/verify'> Send Otp </Link>
                                </button>
                            </div>
                            <div >
                                <p className='text-[#858585] text-[15px] font-normal lg:text-center mt-2 lg:text-[14px] lg:text-black'>Don’t have an Account?  <Link href='/register' className='text-[#303030] lg:text-black font-bold'>Register</Link></p>
                            </div>
                            <div className='lg:max-w-screen-sm mx-auto lg:mx-20'>
                                <div className='flex justify-center items-center gap-2 mt-2'>
                                    <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
                                    <p>OR</p>
                                    <hr className='w-full h-[1px] lg:h-[2px] bg-black lg:bg-[#263238]' />
                                </div>
                            </div>
                        </form>
                        <div>
                            <p className='text-center text-[#222222] text-[15px] font-normal lg:text-[14px] mb-1'>Continue With</p>
                            <div className='flex justify-center items-center gap-3  mb-16'>
                                <button className='w-[43px] h-[43px] lg:w-[45px] lg:h-[45px] rounded-[12px] bg-[#1B1919] flex justify-center items-center p-2'>
                                    <Image src={google} alt='google' />
                                </button>
                                <button className='w-[43px] h-[43px] lg:w-[45px] lg:h-[45px] rounded-[12px] bg-[#1B1919] flex justify-center items-center p-2'>
                                    <Image src={facebook} alt='facebook' className='w-[20px] h-[30px]' />
                                </button>
                            </div>
                        </div>

                    </div>
                </div >
            </div >
        </div>
    );
};

export default login;