import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='footer-back-color'>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-start md:justify-between">
                <div className="">
                    <div className="mt-5 md:grid md:grid-cols-3 md:gap-x-8">
                        <div className="mb-4">
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
                            <p className="text-left footer-text text-base font-medium my-4">Discover the Rich Legacy of Kenyan Coffee</p>
                            <h1 className="text-left footer-text text-base font-bold my-4">Contact Us</h1>
                            <p className="text-left footer-text text-lg font-medium">30 River Ct, King Road, NY 10284</p>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-left footer-text text-base font-bold my-4">Links</h1>
                            <Link className="my-1 text-left footer-text text-lg font-base" href="#">About Us</Link>
                            <br />
                            <Link className="my-1 text-left footer-text text-lg font-base" href="#">Our Story</Link>
                            <br />
                            <Link className="my-1 text-left footer-text text-lg font-base" href="#">Blog</Link>
                            <br />
                            <Link className="my-1 text-left footer-text text-lg font-base" href="#">Term of Service</Link>
                            <br />
                            <Link className="my-1 text-left footer-text text-lg font-base" href="#">Privacy Policy</Link>
                        </div>
                        <div>
                            <h1 className="text-left footer-text text-base font-bold my-4">Subscribe  To Newsletter</h1>
                            <form action="get" className='text-left'>
                                <input type="text" placeholder='Your Email' className='w-60 h-12 px-4 mb-3 rounded-3xl outline-none' />
                                <br />
                                <button className='mx-0 md:mx-4 active-back-color w-[197px] h-[48px] rounded-3xl text-white text-base font-medium'>Join Waitlist</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <p className='text-center footer-text text-xl font-medium my-4'>Copyright © 2024 Kenyan Coffee. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer