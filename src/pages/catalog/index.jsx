import { useEffect, useState } from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import api from '../../services/api';
import OverflowCard from './overflowCard';
import { Pagination } from 'antd';

export default function Catalog() {
    const [totalSpecies, setTotalSpecies] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 10; // Limite de espécies por página

    useEffect(() => {
        async function fetchTotalSpecies() {
            try {
                const response = await api.get('/species/species-count');
                setTotalSpecies(response.data.count);
                console.log(response.data.count);
            } catch (err) {
                console.error("ops! ocorreu um erro: " + err);
            }
        }
        fetchTotalSpecies();
    }, []);

    return (
        <MainContainer currentPage='catalog'>
            <h1 className='items-center justify-center flex text-4xl text-custom-green'>
                Catálogo de Espécies
            </h1>

            <div className="w-1/3 h-px bg-custom-green mx-auto my-4" />

            <section className='w-full flex flex-wrap justify-center items-start gap-4'>
                <OverflowCard page={page - 1} /> {/* Ajuste para passar o page correto */}
                <Pagination 
                    current={page} // Atualiza o estado da página atual
                    total={totalSpecies} 
                    pageSize={limit} // Passa o limite de 10
                    onChange={(page) => setPage(page)}  
                    className='w-full flex justify-center items-center ' 
                />
            </section>
            <Footer />
        </MainContainer>
    );
}
