import React from 'react'
import Navbar from '../../components/navbar'
import OverflowCard from './overflowCard'
import MainContainer from '../../components/core/mainContainer'
import Footer from '../../components/footer'

export default function Catalog() {
    return (
        <MainContainer currentPage='catalog'>
                <h1 className='items-center justify-center flex text-4xl text-custom-green'>
                    Catálogo de Espécies
                </h1>
                <div className="w-1/3 h-px bg-custom-green m-auto" />
                <section className='flex flex-wrap justify-center sm:justify-start items-start gap-4'>
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
                    <OverflowCard />
  
                </section>
                <Footer />
           </MainContainer>
    )
}
