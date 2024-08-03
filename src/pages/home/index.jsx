import React from 'react'
import Navbar from '../../components/navbar'
import GuideCard from './guideCard'
import CarouselHome from './carouselHome'

export default function Home() {
    return (
        <div className="bg-custom w-screen justify-center flex">
            <div className='m-12 w-full h-screen bg-zinc-50 overflow-hidden space-y-16 font-poppins'>
                {/* // <div className='bg-zinc-50 flex flex-col h-screen'> */}
                <Navbar currentPage='home'/>
                <section className='flex justify-center flex-col space-y-16'>
                    <div className='space-y-5 flex flex-col items-center justify-center'>
                        {/* welcome */}
                        <h1 className='text-6xl text-custom-green'>
                            Carbonífera Biodiversa
                        </h1>

                        <p className='text-lg'>
                            Conheça a Biodiversidade da Região Carbonífera!
                        </p>

                    </div>

                    {/* carousel */}

                    <div className="mx-8">
                        <CarouselHome />
                    </div>

                    {/* guide */}
                    <div className='space-y-8 pb-4'>
                        <h2 className='flex items-center justify-center text-xl font-bold text-custom-green'>
                            O Que Encontrará Por Aqui?
                        </h2>
                        {/* cards */}

                        <GuideCard />

                    </div>
                </section>
            </div>
        </div>
    )
}
