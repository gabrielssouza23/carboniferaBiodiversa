import React from 'react'
import GuideCard from './guideCard'
import CarouselHome from './carouselHome'
import MainContainer from '../../components/core/mainContainer'
import Footer from '../../components/footer'
import Divider from '../../components/divider'

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

                <div className='space-y-8 pb-4'>
                    <h2 className='flex items-center justify-center text-xl font-bold text-custom-green'>Veja como contruibuir para o projeto</h2>
                    <Divider centered={true} />
                    <p className='flex items-center justify-center'>Texto explicativo sobre como contribuir</p>

                    {/* steps */}
                    <div className='flex flex-row gap-6 justify-center items-center'>
                        <div>
                            <img src="" alt="" />
                            <p>Fotografe a sua observação</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Descreva a espécie</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Contribua com a comunidade</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='flex items-center justify-center rounded-full font-dela text-zinc-50 bg-custom-green w-12 h-12'>1</div>
                        <span className='w-12 h-1 bg-custom-green'></span>
                        <div className='flex items-center justify-center rounded-full font-dela text-zinc-50 bg-custom-green w-12 h-12'>2</div>
                        <span className='w-12 h-1 bg-custom-green'></span>
                        <div className='flex items-center justify-center rounded-full font-dela text-zinc-50 bg-custom-green w-12 h-12'>3</div>
                    </div>


                    <button type='button'>Contribuir</button>

                </div>
            </section>
            <Footer />

        </MainContainer>
    )
}
