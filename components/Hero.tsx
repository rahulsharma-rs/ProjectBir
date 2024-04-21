import React from 'react';
import Image from 'next/image';
import heroimg from '../public/WhatsApp Image 2024-04-14 at 19.46.18.jpeg'; // Import the GIF file
import otherimg from '../public/WhatsApp Image 2024-04-14 at 19.46.19.jpeg'; // Import the GIF file
import restraurant from '../public/WhatsApp Image 2024-04-14 at 19.46.19 (1).jpeg'; // Import the GIF file
import kangraValleyViewpoint from '../public/kangra-valley-viewpoint.jpg'
import baijnathTemple from '../public/baijnathTemple.jpg'
import bangoru from '../public/bangoru.jpg'
import tashiJong from '../public/tashiJong.jpg'
import birBilling from '../public/birBilling.jpg'

const Hero = () => {
    return (
        <div className='mx-auto min-h-64'>

            <div className='lg:mt-20 px-4 md:px-0'>
                <div className='py-16 shadow-lg md:p-16 shadow-gray-50'>
                    <div className='flex justify-between mx-auto lg:space-x-16 md:space-x-4 md:max-w-7xl flex-col md:flex-row'>
                        <div className='flex-grow md:max-w-xl'>
                            <p className='text-xl font-semibold text-cyan-500'>Welcome to</p>
                            <h1 className='pt-4 pb-4 text-6xl font-bold leading-tight text-black-500 font-poppins'>Hideout Bir </h1>
                            <p className='w-full py-2 leading-7 text-gray-500 md:w-2/3'>Looking for a tranquil setting to relax and reenergize? Look no further! Hideout Bir will offer you whatever you desire and give you the finest service possible. The finest in the neighborhood.</p>
                        </div>
                        <div className='content-start flex-shrink lg:-my-20 md:block w-full md:w-1/2 '>
                            <div className='react-multi-carousel-list  '>
                                <ul className='react-multi-carousel-track transition-all duration-800 ease-linear overflow-hidden transform -translate-x-1785 '>
                                    <li className='mt-20'>
                                        <Image src={heroimg} alt='hero' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='py-16 -mx-4 bg-gray-100 lg:pt-32'>
                        <div className='flex flex-col justify-around px-8 mx-auto space-y-16 sm:space-y-0 sm:space-x-16 sm:flex-row max-w-7xl'>
                            <div className='text-center'>
                                <h2 className='mb-3 text-6xl font-semibold text-cyan-600'>
                                    <span>10</span>
                                    +
                                </h2>
                                <p className='font-semibold text-gray-600 uppercase'>Various Services</p>
                            </div>
                            <div className='text-center'>
                                <h2 className='mb-3 text-6xl font-semibold text-cyan-600'>
                                    <span>3</span>
                                    +
                                </h2>
                                <p className='font-semibold text-gray-600 uppercase'>Diffrent Rooms</p>
                            </div>
                            <div className='text-center'>
                                <h2 className='mb-3 text-6xl font-semibold text-cyan-600'>
                                    <span>10</span>
                                    +
                                </h2>
                                <p className='font-semibold text-gray-600 uppercase'>Entertainment Facilities</p>
                            </div>

                        </div>
                        <div className='flex items-center justify-between p-4 mx-auto mt-16 space-x-4 bg-white md:space-x-16 md:p-8 md:shadow-xl md:rounded-xl max-w-7xl md:shadow-gray-200'>
                            <div className='relative content-start flex-shrink hidden md:block h-400 w-640'>
                                <span className='box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative inset-0'>
                                    <Image src={otherimg} alt='hero' />


                                </span>
                            </div>
                            <div className='flex-grow md:max-w-xl'>
                                <h2 className='pt-4 pb-8 text-5xl font-semibold text-black'>
                                    Word From Us

                                </h2>
                                <p className='py-2 pr-4 font-semibold leading-7 text-gray-500 md:pr-0'>
                                    NAMASTE!!!
                                    <br />
                                    Hideout Bir, welcomes you offering a home-like ambience which serves as a perfect family destination for you and your loved ones. As we say, “It's not a resort, it's a way of life” it's a resort packed with adventures, best services, peace, greenery and scenery.
                                </p>
                                <p className='py-2 font-semibold text-right text-gray-500 '>
                                    - Management Team
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='py-6 -mx-4 bg-gray-100'>
                        <div className='py-4 mx-auto max-w-7xl md:py-20'>
                            <div className='grid grid-cols-1 md:grid-cols-2 px-8'>
                                <div className='relative mx-auto w-full'>
                                    <span className='box-border inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full'>
                                        <Image src={restraurant} alt='hero' />
                                    </span>
                                </div>
                                <div className='mx-auto my-6 leading-loose md:ml-16 md:my-auto'>
                                    <h1>We provide you the quality of</h1>
                                    <div className='flex '>
                                        <svg className='h-8 mt-5 mr-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" /></svg>
                                        <h1 className='mt-4 mb-8 text-3xl underline underline-offset-8' data-icon="utensils">TOP RESTAURANTS</h1></div>
                                    <p>Our restaurant on the top floor offers dishes that celebrate the flavors of all the country's regions, from north to south in a cozy sitting with warm light.</p>
                                    <a href='/facilities'>
                                        <button className='px-4 py-2 mt-4 font-light border rounded border-cyan-500 hover:bg-cyan-500 hover:text-white'>More Facilities</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 px-0 py-16 -mx-4 bg-white md:p-16'>
                        <h2 className='px-8 pt-4 pb-4 mx-auto text-4xl font-semibold text-black max-w-7xl'>Places Nearby</h2>
                        <div className='w-full py-6 bg-white'>
                            <div className='py-20 px-4 md:px-0 mx-auto max-w-7xl '>
                                <div className='grid grid-cols-1 gap-[7rem] md:grid-cols-3 md:grid-row-2 h-100 auto-rows-fr'>
                                    <div className='col-span-1 row-span-2'>
                                        <a href="">
                                            <div className='relative h-full overflow-hidden rounded-lg shadow-lg cursor-pointer card'>
                                                <Image src={kangraValleyViewpoint} className='object-cover w-full transition duration-500 rounded-lg h-5/6 hover:scale-105 ease' alt='hero' />
                                            </div>
                                            <div className='px-6 py-6  z-[100] rounded shadow-lg h-1/5'>
                                                <h1 className='mb-2 text-2xl font-semibold text-black '>
                                                    Kangra Valley Viewpoint |
                                                    <span className='font-normal text-cyan-500'> 3.6 km</span>
                                                </h1>

                                            </div>


                                        </a>

                                    </div>
                                    <div className='col-span-1 row-span-2'>
                                        <a href="">
                                            <div className='relative h-full overflow-hidden rounded-lg shadow-lg cursor-pointer card'>
                                                <Image src={baijnathTemple} className='object-cover w-full transition duration-500 rounded-lg h-5/6 hover:scale-105 ease' alt='hero' />
                                            </div>
                                            <div className='px-6 py-6  z-[100] rounded shadow-lg h-1/4'>
                                                <h1 className='mb-2 text-2xl font-semibold text-black '>
                                                    Shri Baijnath Temple |
                                                    <span className='font-normal text-cyan-500'> 4.6 km</span>
                                                </h1>

                                            </div>


                                        </a>

                                    </div>
                                    <div className='col-span-1 row-span-2'>
                                        <a href="">
                                            <div className='relative h-full overflow-hidden rounded-lg shadow-lg cursor-pointer card'>
                                                <Image src={bangoru} className='object-cover w-full transition duration-500 rounded-lg h-5/6 hover:scale-105 ease' alt='hero' />
                                            </div>
                                            <div className='px-6 py-6  z-[100] rounded shadow-lg h-1/4'>
                                                <h1 className='mb-2 text-2xl font-semibold text-black '>
                                                    Bangoru Waterfall |
                                                    <span className='font-normal text-cyan-500'> 11.7 km</span>
                                                </h1>

                                            </div>


                                        </a>

                                    </div>
                                    <div className='col-span-1 row-span-2'>
                                        <a href="">
                                            <div className='relative h-full overflow-hidden rounded-lg shadow-lg cursor-pointer card'>
                                                <Image src={tashiJong} className='object-cover w-full transition duration-500 rounded-lg h-5/6 hover:scale-105 ease' alt='hero' />
                                            </div>
                                            <div className='px-6 py-6  z-[100] rounded shadow-lg h-1/4'>
                                                <h1 className='mb-2 text-2xl font-semibold text-black '>
                                                    Tashi Jong Buddhist Monastery  |
                                                    <span className='font-normal text-cyan-500'> 12.6 km</span>
                                                </h1>

                                            </div>


                                        </a>

                                    </div>
                                    <div className='col-span-1 row-span-2'>
                                        <a href="">
                                            <div className='relative h-full overflow-hidden rounded-lg shadow-lg cursor-pointer card'>
                                                <Image src={birBilling} className='object-cover w-full transition duration-500 rounded-lg h-5/6 hover:scale-105 ease' alt='hero' />
                                            </div>
                                            <div className='px-6 py-6  z-[100] rounded shadow-lg h-1/4'>
                                                <h1 className='mb-2 text-2xl font-semibold text-black '>
                                                    Travel Bir Billing - Paragliding  |
                                                    <span className='font-normal text-cyan-500'> 6.2 km</span>
                                                </h1>

                                            </div>


                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='lg:mt-20 px-4 md:px-0'></div>
        </div>


    );
}

export default Hero;
