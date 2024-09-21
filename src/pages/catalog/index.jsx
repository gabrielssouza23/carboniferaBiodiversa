import React, { useState } from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import OverflowCard from './overflowCard';

export default function Catalog() {

    return (
        <MainContainer currentPage='catalog'>
            <h1 className='items-center justify-center flex text-4xl text-custom-green'>
                Catálogo de Espécies
            </h1>
            {/* <p className='flex items-center justify-center text-custom-green text-md'>
                Número de espécies: {totalSpecies}
            </p> */}

            <div className="w-1/3 h-px bg-custom-green mx-auto my-4" />

            <section className='w-full flex flex-wrap justify-center items-start gap-4'>
                {/* Passa a função handleCount como prop para OverflowCard */}
                <OverflowCard />
            </section>
            <Footer />
        </MainContainer>
    );
}
