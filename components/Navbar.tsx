import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='mx-auto md:sticky md:top-0 z-[1001] font-poppins relative'>
            <nav className='bg-white shadow-lg gray-700 '>
                <div className='max-w-auto'>
                    < div className='flex items-center justify-between h-20 mx-5 max-w-7xl md:mx-auto'>
                        <Link href='/' className='flex items-center flex-shrink-0 font-semibold text-cyan-500 row max-w-min'>
                            <div className='relative block'>
                                <div className='to do logo'></div>
                                <div className='hidden md:block whitespace-nowrap'>Hideout</div>
                            </div>
                        </Link>
                        <div className='hidden md:block'>
                            <div className='flex items-baseline ml-10 space-x-4'>
                                <Link href='/' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Home</Link>
                                {/* <Link href='/gallery' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Gallery</Link> */}
                                {/* <Link href='/rooms' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Rooms</Link> */}
                                <Link href='/facilities' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Facilities</Link>
                                {/* <Link href='/about' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>About</Link> */}
                                <Link href='/#footer' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Contact</Link>

                            </div>
                        </div>

                    </div>


                </div>


            </nav>

        </div>
    )
}

export default Navbar
