import React from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import Divider from '../../components/divider';

export default function Articles() {
    return (
        <MainContainer currentPage='articles'>
            <h1 className='items-center justify-center flex text-4xl text-custom-green'>Artigos</h1>
            <Divider centered={true} />
            <section className='sm:grid flex flex-col grid-cols-2 mx-8 gap-4'>

                <div className="h-40 flex bg-slate-200 gap-5 border-b-4 border-custom-green border-solid">
                    <div className='flex justify-start items-start w-40'>
                        <img src="/queroquero.jpg" alt="Artigo 1" />
                    </div>
                    <div className='flex flex-col justify-center space-y-2 w-full'>
                        <h2 className='text-xl font-bold'>What is Lorem Ipsum?</h2>
                        <p className='text-sm text-gray-700 truncate w-72'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                        <div className='flex justify-between mr-2 sm:m-0'>
                            <span className='text-sm text-gray-500'>10/09/2024</span>
                            <span><a href="#">Ler Mais</a></span>
                        </div>
                    </div>
                </div>

                <div className="h-40 flex bg-slate-400 gap-5">
                    <div className='flex justify-start items-start w-40'>
                        <img src="/queroquero.jpg" alt="Artigo 2" />
                    </div>
                    <div className='flex flex-col justify-center space-y-2'>
                        <h2 className='text-xl font-bold'>Título</h2>
                        <p className='text-sm text-gray-700 truncate w-72'>Previa...</p>
                        <span className='text-sm text-gray-500'>09/09/2024</span>
                    </div>
                </div>

            </section>
            <Footer />
        </MainContainer>
    );
}
