import React from 'react'

const Footer = () => {
    return (
        <div id='footer' className=' w-full text-center text-white bg-gray-900'>
            <div className='px-6 pt-6 mx-auto max-w-7xl '>
                <div className='grid gap-10 mt-16 text-left lg:grid-cols-4 md:grid-cols-2'>
                    <div className='mb-6 text-left'>

                        <p className='mb-4 text-center' >With its ideal location, comfortable accommodation, delightful culinary options,Hideout in Bir is the perfect choice  to experience the beauty and tranquility of Himachal Pradesh</p>
                    </div>
                    <div className='mb-6'>
                        <h5 className='mb-6 font-bold uppercase '>quick links</h5>
                        <ul className='mb-0 list-none'>
                            <li className='mb-4'><a className='text-white cursor-pointer text-md hover:text-cyan-500' href='/facilities'>Facilities</a></li>
                            <li className='mb-4'><a className='text-white cursor-pointer text-md hover:text-cyan-500' href='/gallery'>Gallery</a></li>
                            <li className='mb-4'><a className='text-white cursor-pointer text-md hover:text-cyan-500' href='/contact'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <h5 className='mb-6 font-bold uppercase '>Stay In Touch</h5>
                        <ul className='mb-0 text-left list-none'>
                            <li className='mb-4'>
                                <div className='icons flex flex-row items-center'>
                                    <a className='text-white text-md hover:text-cyan-500' href="">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[20px] text-2xl mb-4 svg-inline--fa fa-envelope     " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                            <path fill="currentColor" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path>


                                        </svg>
                                        <p> hideoutbir@gmail.com</p>


                                    </a>
                                </div>
                            </li>

                            <li className='mb-4 flex flex-row' >
                                <a className='text-white text-md hover:text-cyan-500' href="">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[20px] text-2xl mb-4 svg-inline--fa fa-phone-flip      " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                        <path fill="currentColor" d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"></path>


                                    </svg>
                                    <p>+977-9841005292</p>


                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Footer
