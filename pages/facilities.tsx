import '../app/globals.css'
import Footer from '@/components/Footer'
import Image from 'next/image';
import Navbar from '@/components/Navbar'
import React from 'react'
import pool from '../public/pool.webp'

const facilities = () => {
    return (
        <div>
            <Navbar />
            <div className='mx-auto min-h-64'>
                <div className='shadow h-80'>
                    <div className='relative overflow-hidden round-lg-shadow-lg h-80'>
                        <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;'>
                            <Image src={pool} alt='hero' />

                        </span>
                        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-cyan-500 via-black to-cyan-500 opacity-40'></div>
                        <div className='absolute top-1/2 left-1/2'>
                            <h1 className='mb-3 text-3xl md:text-5xl font-bold tracking-tight  text-white  underline underline-offset-8 -translate-y-1/2 -translate-x-1/2 capitalize'>
                                Facilities
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='w-full py-6 bg-gray-100'>
                    <div className='pt-20 mx-auto max-w-7xl '>
                        <div className='grid md:grid-cols-4 grid-cols-2 gap-y-12 my-0'>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-tv " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M512 448H127.1C110.3 448 96 462.3 96 479.1S110.3 512 127.1 512h384C529.7 512 544 497.7 544 480S529.7 448 512 448zM592 0h-544C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h544c26.5 0 48-21.5 48-48v-320C640 21.5 618.5 0 592 0zM576 352H64v-288h512V352z"></path>


                                </svg>
                                <p>Big Screen TV</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell-concierge" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-bell-concierge   " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z"></path>


                                </svg>
                                <p>Room Service</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-wifi  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z"></path>


                                </svg>
                                <p>Free WiFi</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-mug-saucer " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"></path>


                                </svg>
                                <p>Breakfast</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-square-parking  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M192 256V192H240C257.7 192 272 206.3 272 224C272 241.7 257.7 256 240 256H192zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM336 224C336 170.1 293 128 240 128H168C145.9 128 128 145.9 128 168V352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352V320H240C293 320 336 277 336 224z"></path>


                                </svg>
                                <p>Free Parking</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-box-tissue   " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M384 288l64-192h-109.4C308.4 96 281.6 76.66 272 48C262.4 19.33 235.6 0 205.4 0H64l64 288H384zM0 480c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-64H0V480zM480 224h-40.94l-21.33 64H432C440.8 288 448 295.2 448 304S440.8 320 432 320h-352C71.16 320 64 312.8 64 304S71.16 288 80 288h15.22l-14.22-64H32C14.33 224 0 238.3 0 256v128h512V256C512 238.3 497.7 224 480 224z"></path>


                                </svg>
                                <p>Tissue Box</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-sink    " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M496 288h-96V256l64 .0002c8.838 0 16-7.164 16-15.1v-15.1c0-8.838-7.162-16-16-16L384 208c-17.67 0-32 14.33-32 32v47.1l-64 .0005v-192c0-17.64 14.36-32 32-32s32 14.36 32 32v16c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-16c0-59.2-53.85-106-115.1-94.14C255.3 10.71 224 53.36 224 99.79v188.2L160 288V240c0-17.67-14.33-32-32-32L48 208c-8.836 0-16 7.162-16 16v15.1C32 248.8 39.16 256 48 256l64-.0002V288h-96c-8.836 0-16 7.164-16 16v32c0 8.836 7.164 16 16 16h480c8.836 0 16-7.164 16-16V304C512 295.2 504.8 288 496 288zM32 416c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-32H32V416z"></path>


                                </svg>
                                <p>Toiletries</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-jug-detergent     " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M96 24C96 10.75 106.7 0 120 0H200C213.3 0 224 10.75 224 24V48H232C245.3 48 256 58.75 256 72C256 85.25 245.3 96 232 96H88C74.75 96 64 85.25 64 72C64 58.75 74.75 48 88 48H96V24zM0 256C0 185.3 57.31 128 128 128H256C326.7 128 384 185.3 384 256V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V256zM256 352C256 369.7 270.3 384 288 384C305.7 384 320 369.7 320 352V256C320 238.3 305.7 224 288 224C270.3 224 256 238.3 256 256V352z"></path>


                                </svg>
                                <p>Laundry Services</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512 " className='h-[30px] text-2xl mb-4'><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" /></svg>
                                <p>Pets Friendly</p>

                            </div>
                            <div className='icons flex flex-col items-center'>


                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wifi" className="h-[30px] text-2xl mb-4 svg-inline--fa fa-water-ladder     " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >


                                    <path fill="currentColor" d="M320 128c0 .375-.1992 .6855-.2129 1.057C319.8 129.9 320 130.7 320 131.6V128zM192 383.1V288h192v95.99c39.6-.1448 53.95-17.98 64-26.83V128c0-17.62 14.38-32 32-32s32 14.38 32 32c0 17.67 14.33 32 32 32s32-14.33 32-32c0-53-42.1-95.1-95.1-95.1C420.1 32 384 81.94 384 131.6V224H192V128c0-17.62 14.38-32 32-32s32 14.38 32 32c0 17.67 14.33 32 32 32c17.3 0 31.2-13.79 31.79-30.94c-1.227-49.01-37.99-97.06-95.79-97.06C170.1 32 128 74.1 128 128v229.2C138.5 366.4 151.4 383.8 192 383.1zM576 445c0-15.14-10.82-28.59-26.25-31.42c-48.52-8.888-45.5-29.48-69.6-29.48c-25.02 0-31.19 31.79-96.18 31.79c-48.59 0-72.72-22.06-73.38-22.62c-6.141-6.157-14.26-9.188-22.42-9.188c-24.75 0-31.59 31.81-96.2 31.81c-48.59 0-72.69-22.03-73.41-22.59c-6.125-6.157-14.24-9.196-22.4-9.196c-8.072 0-16.18 2.976-22.45 8.852c-29.01 26.25-73.75 12.54-73.75 52.08c0 16.08 12.77 32.07 31.71 32.07c9.77 0 39.65-7.34 64.26-21.84c19.5 11.53 51.51 24.69 96.08 24.69s76.46-13.12 95.96-24.66c19.53 11.53 51.52 24.62 96.06 24.62c44.59 0 76.51-13.12 96.01-24.66c24.71 14.57 54.74 21.83 64.24 21.83C563.2 477.1 576 461.3 576 445z"></path>


                                </svg>
                                <p>Swimming Pool</p>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default facilities
