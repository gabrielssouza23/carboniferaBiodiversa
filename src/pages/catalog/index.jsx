import React from 'react'
import Navbar from '../../components/navbar'
import OverflowCard from './overflowCard'

export default function Catalog() {
    return (
        <div className="bg-custom w-screen justify-center flex">
            <div className='m-12 w-full h-screen bg-zinc-50 overflow-hidden space-y-8 font-poppins'>
                <Navbar currentPage='catalog' />
                <h1 className='items-center justify-center flex text-4xl text-custom-green'>
                    Catálogo de Espécies
                </h1>
                <div className="w-1/3 h-px bg-custom-green m-auto" />
                <section className='flex gap-4 flex-wrap justify-center'>
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                </section>
            </div>
        </div>
    )
}
