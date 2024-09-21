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
import { useParams } from 'react-router-dom';
import api from '../../services/api'


export default function Specie() {

    const { specieId } = useParams();

    const [specie, setSpecie] = React.useState([]);

    React.useEffect(() => {
        api.get(`/species/specie/${specieId}`)
            .then((response) => {
                console.log(response.data);
                setSpecie(response.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    },[specieId]);

    return (
        <MainContainer currentPage='catalog'>
            <div className='items-center justify-center flex flex-col gap-3'>
                <h1 className='text-4xl text-custom-green'>
                    {specie.nomepopular}
                </h1>
                <p className='text-zinc-400'>({specie.nomecientifico})</p>
            </div>
            <Divider centered={true} />

            <div className='flex px-8'>
                <TagCategorySpecie />
            </div>
            <div className="m-auto p-8 pt-0">
                <CarouselSpecie allImages={specie.all_images}/>
            </div>
            <section className='flex items-start justify-center flex-col gap-6 px-8 font-poppins'>
                <h1 className='text-2xl text-custom-green font-semibold'>Descrição morfológica</h1>
                <Divider />

                <p className='from-neutral-50 tracking-wide	leading-6 text-justify'>
                    {specie.descricao}
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
