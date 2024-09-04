import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href="/" className='flex items-center justify-start'>
                <Image
                    className=""
                    src="/logo.svg"
                    alt="Kenyan Coffee"
                    width={28}
                    height={27}
                />
                <h1 className='mx-3 font-extrabold text-4xl active-color'>Kenyan Coffee</h1>
            </Link>
            <div className="menu-links">
                <Link href="#" className='mx-3 font-extrabold text-2xl active-color'>Contact</Link>
                <button className='mx-4 active-back-color w-[197px] h-[48px] rounded-3xl text-white text-base font-medium'>Join Waitlst</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar