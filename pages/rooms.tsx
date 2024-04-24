import '../app/globals.css'
import Footer from '@/components/Footer'
import Image from 'next/image';
import Navbar from '@/components/Navbar'
import React from 'react'
import pool from '../public/pool.webp'
import deluxe from '../public/deluxe.jpeg'
import superDeluxe from '../public/superDeluxe.jpeg'

const rooms = () => {
    return (

        <div>
            <Navbar />
            <div className='mx-auto min-h-64'>
                <div className='shadow h-80'>
                    <div className='relative overflow-hidden round-lg-shadow-lg h-80'>
                        <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'>
                            <Image className='w-screen ' src={pool} alt='hero' />

                        </span>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-cyan-500 via-black to-cyan-500 opacity-40'></div>
                        <div className='absolute top-1/2 left-1/2'>
                            <h1 className='mb-3 text-3xl md:text-5xl font-bold tracking-tight  text-white  underline underline-offset-8 -translate-y-1/2 -translate-x-1/2 capitalize'>
                                Rooms
                            </h1>
                        </div>
                    </div>

                </div>
                <div className='w-full py-6 bg-gray-100 px-4 md:px-0'>
                    <div className='py-20 mx-auto max-w-7xl '>
                        <div className='w-full mr-8 '>
                            <h1 className='mb-8 text-4xl font-semibold leading-tight underline underline-offset-8'>
                                FREE AMENITIES
                            </h1>
                            <div className='gap-12 px-4 pt-6 mb-8 rounded cursor-pointer md:columns-2 shadow-lg shadow-black-500 bg-white'>
                                <div className='pb-4 mb-8 border-b border-gray-700 '>
                                    <h1 className='mb-2 font-bold'>CONFERENCE HALL</h1>
                                    <p>We invites guests not only to relax, but also to pre & post wedding parties ,family reunion, a corporate retreat, or a milestone birthday bash, our resort is equipped to host gatherings of all sizes.</p>
                                </div>
                                <div className='pb-4 mb-8 border-b border-gray-700 '>
                                    <h1 className='mb-2 font-bold'>DINING ROOM</h1>
                                    <p>Indulge in culinary excellence amidst breathtaking views. Our dining room offers gourmet delights, elegant ambiance, and unparalleled service. Whether it's a romantic dinner or a special event, reserve your table today for an unforgettable dining experience at Hideout</p>
                                </div>
                                <div className='pb-4 mb-8 border-b border-gray-700 '>
                                    <h1 className='mb-2 font-bold'>SWIMMING POOL</h1>
                                    <p>A swimming pool is a place that has been built for people to swim in. It consists of a large hole that has been tiled and filled with water.</p>
                                </div>
                                <div className='pb-4 mb-8 border-b border-gray-700 '>
                                    <h1 className='mb-2 font-bold'>BAR</h1>
                                    <p>A full bar serves liquor, cocktails, wine, and beer. A wine bar is an elegant bar that focuses on wine rather than on beer or liquor.</p>
                                </div>

                            </div>
                            <h1 className='mt-16 mb-4 text-4xl font-semibold leading-tight underline underline-offset-8'>OUR ROOMS</h1>
                            <p className='mb-16'>
                                Hideout Resort offers rooms and suites with the epitome of comfort and convenience. Stylishly decorated with quality fixtures and fittings, attention to detail and careful thought has been put into every aspect of our accommodation, from the Common Rooms right up to the Super Deluxe Rooms.
                                <br />
                                <br />
                                Hideout Resort offers business executive spaces with meeting rooms and club service, and exclusive drinking space. Interconnecting rooms for families and groups are also available. Every room is fitted with comfortable furnishing, personalised space, a desk, LED TV, tea/coffee making facilities, phone, high-speed internet/wifi and a well managed bathroom.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 h-100'>
                            <div>
                                <a href="https://www.booking.com/hotel/in/hideout-sansal.en-gb.html?aid=356980&label=gog235jc-1DCAsobEIOaGlkZW91dC1zYW5zYWxIM1gDaGyIAQGYAQm4ARnIAQzYAQPoAQGIAgGoAgO4AvWwnrEGwAIB0gIkNTA1N2FmZTYtMmJhZS00ZjdlLWFmZDktYjg1NWVlZTk5YzQ22AIE4AIB&sid=4b8879a2248796c1546d0d7a0a50bb75&age=1&dist=0&group_adults=2&group_children=1&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&" target='_blank'>
                                    <div className='relative rounded-lg card hover:shadow-xl'>
                                        <div className='relative w-full max-h-[340px] md:max-h-full h-[300px]'>
                                            <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'>
                                                <Image className='absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover ' src={superDeluxe} alt='hero' />




                                            </span>
                                        </div>
                                        <div className='absolute px-3 py-2 font-semibold bg-white rounded-lg top-3 right-3'>
                                            Rs. 2000 per/night
                                        </div>
                                        <div className='absolute px-3 py-2 font-semibold bg-amber-300 -top-5 -left-5 uppercase text-center text-[11px] h-[100px] w-[100px] flex items-center justify-center rounded-full border-white border-4 text-amber-900 '>Breakfast included</div>
                                        <div className='absolute bottom-4 left-3 '>
                                            <h1 className='mb-2 text-2xl font-bold text-white'>
                                                Super Deluxe Room
                                            </h1>
                                        </div>
                                        <div className='flex flex-row justify-start gap-4 px-3 py-2 text-white rounded-lg align-center bg-stone-700'>
                                            <div>2 Adults</div>

                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div>
                                <a href="https://www.booking.com/hotel/in/hideout-sansal.en-gb.html?aid=356980&label=gog235jc-1DCAsobEIOaGlkZW91dC1zYW5zYWxIM1gDaGyIAQGYAQm4ARnIAQzYAQPoAQGIAgGoAgO4AvWwnrEGwAIB0gIkNTA1N2FmZTYtMmJhZS00ZjdlLWFmZDktYjg1NWVlZTk5YzQ22AIE4AIB&sid=4b8879a2248796c1546d0d7a0a50bb75&age=1&dist=0&group_adults=2&group_children=1&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&" target='_blank'>
                                    <div className='relative rounded-lg card hover:shadow-xl'>
                                        <div className='relative w-full max-h-[340px] md:max-h-full h-[300px]'>
                                            <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'>
                                                <Image className='absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover ' src={deluxe} alt='hero' />




                                            </span>
                                        </div>
                                        <div className='absolute px-3 py-2 font-semibold bg-white rounded-lg top-3 right-3'>
                                            Rs. 1600 per/night
                                        </div>
                                        {/* <div className='absolute px-3 py-2 font-semibold bg-amber-300 -top-5 -left-5 uppercase text-center text-[11px] h-[100px] w-[100px] flex items-center justify-center rounded-full border-white border-4 text-amber-900 '>Breakfast included</div> */}
                                        <div className='absolute bottom-4 left-3 '>
                                            <h1 className='mb-2 text-2xl font-bold text-white'>
                                                Deluxe Room
                                            </h1>
                                        </div>
                                        <div className='flex flex-row justify-start gap-4 px-3 py-2 text-white rounded-lg align-center bg-stone-700'>
                                            <div>2 Adults</div>

                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default rooms
