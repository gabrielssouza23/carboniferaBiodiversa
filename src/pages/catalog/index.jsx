import React from 'react'
import Navbar from '../../components/navbar'

export default function Catalog() {
    return (
        <div className="bg-custom w-screen justify-center flex">
            <div className='m-12 w-full h-screen bg-zinc-50 overflow-hidden space-y-16 font-poppins'>
                <Navbar currentPage='catalog'/>
            </div>
        </div>
    )
}
