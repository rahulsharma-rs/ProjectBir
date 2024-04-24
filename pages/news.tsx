import '../app/globals.css'
import Footer from '@/components/Footer'
import Image from 'next/image';
import Navbar from '@/components/Navbar'
import React from 'react'

const news = () => {
    return (
        <div>
            <Navbar />
            <div>
                hello from news
            </div>
            <Footer />

        </div>
    )
}

export default news
