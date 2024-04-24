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
                                <Link href='/rooms' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Rooms</Link>
                                <Link href='/facilities' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Facilities</Link>
                                {/* <Link href='/news' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>News</Link> */}
                                <Link href='/#footer' className='px-3 py-2 text-sm  rounded-md hover:text-cyan-500 text-gray-500 font font-medium'>Contact</Link>

                                <a href="https://www.booking.com/hotel/in/hideout-sansal.en-gb.html?aid=356980&label=gog235jc-1DCAsobEIOaGlkZW91dC1zYW5zYWxIM1gDaGyIAQGYAQm4ARnIAQzYAQPoAQGIAgGoAgO4AvWwnrEGwAIB0gIkNTA1N2FmZTYtMmJhZS00ZjdlLWFmZDktYjg1NWVlZTk5YzQ22AIE4AIB&sid=4b8879a2248796c1546d0d7a0a50bb75&age=1&dist=0&group_adults=2&group_children=1&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&" target='_blank' className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Book Now</a>



                            </div>
                        </div>

                    </div>


                </div>


            </nav>

        </div>
    )
}

export default Navbar
