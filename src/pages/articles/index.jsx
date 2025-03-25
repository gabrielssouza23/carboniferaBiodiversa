import React from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Articles() {
    const navigate = useNavigate();
    return (
        <MainContainer currentPage="articles">
            <h1 className="items-center justify-center flex text-4xl text-custom-green">Artigos</h1>
            <Divider centered={true} />
            <section className="grid lg:grid-cols-2 mx-8 gap-6">
                {/* Artigo 1 */}
                <div className="bg-[#F6F8FF] p-4 rounded-lg shadow-lg space-y-4">
                    {/* Imagem */}
                    <div className="w-full h-48 overflow-hidden rounded-lg">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co/bMJQm0S5/Whats-App-Image-2025-03-24-at-19-03-56-1.jpg"
                            alt=""
                        />
                    </div>
                    {/* Conteúdo */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Caminhada do projeto</h2>
                        <p className="text-gray-600">Resumo da caminhada do Carbonífera Biodiversa...</p>
                    </div>
                    {/* Rodapé */}
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Data: 02/2025</span>
                        <button className="px-4 py-2 bg-custom-green text-white rounded-md" onClick={() => navigate("/artigo/1")}>
                            Ler mais
                        </button>
                    </div>
                </div>

                {/* Artigo 2 */}
                {/* <div className="bg-[#F6F8FF] p-4 rounded-lg shadow-lg space-y-4">
                    <div className="w-full h-48 overflow-hidden rounded-lg">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co/BgtY2sh/ae62570552a3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Título interessante do artigo</h2>
                        <p className="text-gray-600">Breve resumo do artigo aqui...</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Data 02/2025</span>
                        <button className="px-4 py-2 bg-custom-green text-white rounded-md">
                            Ler mais
                        </button>
                    </div>
                </div> */}
            </section>
            <Footer />
        </MainContainer>
    );
}
