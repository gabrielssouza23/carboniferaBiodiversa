import React from 'react'
import MainContainer from '../../components/core/mainContainer'
import Footer from '../../components/footer'
import { Carousel } from 'antd'
import CarouselSpecie from './carouselSpecie'

export default function Specie() {
    return (
        <MainContainer currentPage='catalog'>
            <div className='items-center justify-center flex flex-col gap-3'>
                <h1 className='text-4xl text-custom-green'>
                    Quero-Quero
                </h1>
                <p className='text-zinc-400'>(Vanellus chilensis)</p>
            </div>
            <div className="w-1/3 h-px bg-custom-green m-auto" />
            
            <div className="m-auto p-8">
                <CarouselSpecie />
            </div>
            <section className='flex items-center justify-center flex-col gap-6'>
                <h1>Descrição morfológica</h1>
                <p>Ave Diurna </p>
            </section>
            <Footer />
        </MainContainer>
    )
}
