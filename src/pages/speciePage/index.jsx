import React from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import CarouselSpecie from './carouselSpecie';
import TagCategorySpecie from './tagCategorySpecie';
import Divider from '../../components/divider';
import CarouselCommunity from './carouselCommunity';
import References from './references';
import Bibliography from './bibliography';
import SimpleMap from './map';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../../components/loader';

export default function Specie() {
    const { specieId } = useParams();

    const [loading, setLoading] = React.useState(true);
    const [specie, setSpecie] = React.useState(null); // Inicie como null

    React.useEffect(() => {
        api.get(`/species/specie/${specieId}`)
            .then((response) => {
                console.log(response.data);
                setSpecie(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
                setLoading(false);
            });
    }, [specieId]);

    const specieCategories = specie ? {
        reino: specie.reino,
        filo: specie.filo,
        classe: specie.classe,
        ordem: specie.ordem,
        familia: specie.familia,
        genero: specie.genero,
        especie: specie.especie,
    } : {};

    const processTextWithBold = (text) => {
        const parts = text.split(/(\*\*[\s\S]+?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                const boldText = part.slice(2, -2).trim();
                return <b key={index} className='text-xl'>{boldText}</b>;
            }
            return part;
        });
    };
    return (
        <MainContainer currentPage='catalog'>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className='items-center justify-center flex flex-col gap-3'>
                        <h1 className='text-4xl text-custom-green'>
                            {specie.nomepopular}
                        </h1>
                        <p className='text-zinc-400 italic'>({specie.nomecientifico})</p>
                    </div>
                    <Divider centered={true} />
                    <div className='flex px-8'>
                        <TagCategorySpecie {...specieCategories} />
                    </div>
                    <div className="m-auto p-8 pt-0">
                        <CarouselSpecie allImages={specie.all_images} />
                    </div>
                    <section className='flex items-start justify-center flex-col gap-6 px-8 font-poppins'>
                        <h1 className='text-2xl text-custom-green font-semibold'>Descrição morfológica</h1>
                        <Divider />
                        <p className='from-neutral-50 tracking-wide leading-6 text-justify font-poppins font-normal'>
                            {/* {specie.descricao} */}
                            {specie.descricao.split(/\n/).map((paragraph, index) => (
                                <div key={index} className="mb-4">
                                    {processTextWithBold(paragraph.trim())}
                                </div>
                            ))}
                        </p>
                        <References allReferences={specie.all_references} />
                        {/* <Bibliography /> */}
                        <h1 className='text-2xl text-custom-green font-semibold  mt-0'>Contribuição da comunidade</h1>
                        <Divider />
                    </section>
                    <div className="m-auto">
                        <CarouselCommunity specieId={specieId} />
                    </div>
                    <SimpleMap specieId={specieId} />
                </>
            )}
            <Footer />
        </MainContainer>
    );
}