import React from 'react'
import MainContainer from '../../components/core/mainContainer'
import Footer from '../../components/footer'
import { Carousel } from 'antd'
import CarouselSpecie from './carouselSpecie'
import TagCategorySpecie from './tagCategorySpecie'
import Divider from '../../components/divider'
import CarouselCommunity from './carouselCommunity'
import References from './references'
import Bibliography from './bibliography'
import SimpleMap from './map'

export default function Specie() {
    return (
        <MainContainer currentPage='catalog'>
            <div className='items-center justify-center flex flex-col gap-3'>
                <h1 className='text-4xl text-custom-green'>
                    Quero-Quero
                </h1>
                <p className='text-zinc-400'>(Vanellus chilensis)</p>
            </div>
            <Divider centered={true}/>
            
            <div className='flex px-8'>
                <TagCategorySpecie />
            </div>
            <div className="m-auto p-8 pt-0">
                <CarouselSpecie />
            </div>
            <section className='flex items-start justify-center flex-col gap-6 px-8 font-poppins'>
                <h1 className='text-2xl text-custom-green font-semibold'>Descrição morfológica</h1>
                <Divider />

                <p className='from-neutral-50 tracking-wide	leading-6 text-justify'>
                Mede 37 centímetros de comprimento e pesa cerca de 277 gramas.
                Possui um esporão pontudo, ósseo, com 1 centímetro de comprimento no encontro das asas, uma faixa preta desde o pescoço ao peito e ainda umas penas longas (penacho) na região posterior da cabeça; tem um desenho chamativo de preto, branco e cinzento na plumagem. A íris e as pernas são avermelhadas. O esporão é exibido a rivais ou inimigos com um alçar de asa ou durante o voo.
                </p>

                <References />

            <Bibliography />               

                <h1 className='text-2xl text-custom-green font-semibold'>Contribuição da comunidade</h1>
                <Divider />
            </section>
            
                <div className="m-auto p-8 pt-0">
                    <CarouselCommunity />
                </div>
                <SimpleMap />

            <Footer />
        </MainContainer>
    )
}
