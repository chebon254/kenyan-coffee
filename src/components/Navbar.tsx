import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <div>
            <Link href="/">
                <Image
                    className=""
                    src="/logo.svg"
                    alt="Kenyan Coffee"
                    width={50}
                    height={50}
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