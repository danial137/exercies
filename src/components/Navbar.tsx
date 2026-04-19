import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
      {/* {left} */}
      <Link href="/" className='flex items-center'>

        <Image src="/logo.png" alt='trend' width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />

        <p className='hidden md:block text-md font-medium tracking-wider'>TRENDPERSIA</p>

      </Link>

      {/* {RIGHT} */}

      <div>
        
      </div>

    </div>
  )
}

export default Navbar