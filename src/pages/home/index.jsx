import React from 'react'
import GuideCard from './guideCard'
import CarouselHome from './carouselHome'
import MainContainer from '../../components/core/mainContainer'
import Footer from '../../components/footer'

export default function Home() {
    return (
        <MainContainer currentPage='home'>
            <section className='flex justify-center flex-col space-y-16'>
                <div className='space-y-5 flex flex-col items-center justify-center'>
                    {/* welcome */}
                    <h1 className='text-3xl font-semibold sm:text-6xl text-custom-green'>
                        Carbonífera Biodiversa
                    </h1>

                    <p className='text-sm  sm:text-lg'>
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
            <Footer />

        </MainContainer>
    )
}
