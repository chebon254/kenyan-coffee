"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="body-back">
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href="/" className='flex items-center'>
                    <Image
                        src="/logo.svg"
                        alt="Kenyan Coffee"
                        width={28}
                        height={27}
                    />
                    <h1 className='mx-3 font-extrabold text-4xl active-color'>Kenyan Coffee</h1>
                </Link>
                <div className="flex md:hidden">
                    <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}></path>
                        </svg>
                    </button>
                </div>
                <div className={`menu-links md:flex ${isOpen ? 'block' : 'hidden'} items-center justify-center text-center w-full md:w-auto`}>
                    <Link href="#" className='block md:inline-block mx-3 font-extrabold text-2xl active-color'>
                        Contact
                    </Link>
                    <button className='block md:inline-block mx-auto mt-4 md:mt-0 active-back-color w-[197px] h-[48px] rounded-3xl text-white text-base font-medium'>
                        Join Waitlist
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
