import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <div>
            <Link href="/">
                <Image
                    className="absolute inset-0 object-cover w-full h-full"
                    src="/logo.svg"
                    alt="Kenyan Coffee"
                />
                <h1>Kenyan Coffee</h1>
            </Link>
            <div className="menu-links">
                <a href="#">Contact</a>
                <button>Join Waitlst</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar