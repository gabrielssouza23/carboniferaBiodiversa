import React from 'react'
import MainContainer from '../../components/core/mainContainer'
import Footer from '../../components/footer'
import { Carousel } from 'antd'
import CarouselSpecie from './carouselSpecie'
import TagCategorySpecie from './tagCategorySpecie'
import Divider from '../../components/divider'
import CarouselCommunity from './carouselCommunity'

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

                <h1 className='text-2xl text-custom-green font-semibold'>Referências</h1>
                <Divider />
                <ol type='1' className='list-decimal space-y-2 list-inside leading-5 text-justify'>
                    <li>
                        BirdLife International (2020). "Vanellus chilensis". IUCN Red List of Threatened Species. 2020: e.T22694075A163620949. doi:10.2305/IUCN.UK.2020-3.RLTS.T22694075A163620949.en. Retrieved 12 November 2021.
                    </li>
                    <li>
                        Mlíkovský, Jiří (26 August 2011). "Nomenclatural and taxonomic status of bird taxa (Aves) described by an ornithological swindler, Josef Prokop Pražák (1870–1904)". Zootaxa. 3005 (3005): 45–68. doi:10.11646/zootaxa.3005.1.2.
                    </li>
                    <li>
                        Terrilyn Alaniz (2024-04-17). "Sighting". Birda. Retrieved 2024-04-18.
                    </li>
                </ol>

                <h1 className='text-2xl text-custom-green font-semibold'>Bibliografia</h1>
                <Divider />
                <ol type='1' className='list-decimal space-y-2 list-inside leading-5 text-justify'>
                    <li>
                        BirdLife International (2020). "Vanellus chilensis". IUCN Red List of Threatened Species. 2020: e.T22694075A163620949. doi:10.2305/IUCN.UK.2020-3.RLTS.T22694075A163620949.en. Retrieved 12 November 2021.
                    </li>
                    <li>
                        Mlíkovský, Jiří (26 August 2011). "Nomenclatural and taxonomic status of bird taxa (Aves) described by an ornithological swindler, Josef Prokop Pražák (1870–1904)". Zootaxa. 3005 (3005): 45–68. doi:10.11646/zootaxa.3005.1.2.
                    </li>
                    <li>
                        Terrilyn Alaniz (2024-04-17). "Sighting". Birda. Retrieved 2024-04-18.
                    </li>
                </ol>

                <h1 className='text-2xl text-custom-green font-semibold'>Contribuição da comunidade</h1>
                <Divider />
            </section>
                <div className="m-auto p-8 pt-0" style={{ display: "" }}>
                    <CarouselCommunity />
                </div>
            <Footer />
        </MainContainer>
    )
}
