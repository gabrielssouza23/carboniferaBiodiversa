import React from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import Divider from '../../components/divider';
import { Navigate, useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard';

export default function Articles() {
    const navigate = useNavigate();
    return (
        <MainContainer currentPage="articles">
            <h1 className="items-center justify-center flex text-2xl sm:text-3xl md:text-4xl text-custom-green text-center">Artigos</h1>
            <Divider centered={true} />
            <div className="px-4 sm:px-8 md:px-16 lg:px-[8rem]">
                <ArticleCard
                    featured
                    image="https://i.ibb.co/bMJQm0S5/Whats-App-Image-2025-03-24-at-19-03-56-1.jpg"
                    title="Quem somos e o que é a Carbonífera Biodiversa?"
                    summary="Uma iniciativa criada por estudantes do IFSul para valorizar, mapear e compartilhar a biodiversidade da região carbonífera do Rio Grande do Sul — com a colaboração ativa de toda a comunidade."
                    author = {{
                        name: "Carbonífera Biodiversa",
                        image: "https://fotonovak.wordpress.com/wp-content/uploads/2018/01/dsc_0428b.jpg?w=768",
                    }}
                    date="5 de Jul, 2025"
                    link="/artigo/1"
                />
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-6 px-4 sm:px-8 md:px-16">
                <ArticleCard
                    image="https://i.ibb.co/bMJQm0S5/Whats-App-Image-2025-03-24-at-19-03-56-1.jpg"
                    title="Quem somos e o que é a Carbonífera Biodiversa?"
                    summary="Uma iniciativa criada por estudantes do IFSul para valorizar, mapear e compartilhar a biodiversidade da região carbonífera do Rio Grande do Sul — com a colaboração ativa de toda a comunidade."
                    author = {{
                        name: "Carbonífera Biodiversa",
                        image: "https://fotonovak.wordpress.com/wp-content/uploads/2018/01/dsc_0428b.jpg?w=768",
                    }}
                    date="5 de Jul, 2025"
                    link="/artigo/1"
                />
                <ArticleCard
                    image="https://i.ibb.co/bMJQm0S5/Whats-App-Image-2025-03-24-at-19-03-56-1.jpg"
                    title="Quem somos e o que é a Carbonífera Biodiversa?"
                    summary="Uma iniciativa criada por estudantes do IFSul para valorizar, mapear e compartilhar a biodiversidade da região carbonífera do Rio Grande do Sul — com a colaboração ativa de toda a comunidade."
                    author = {{
                        name: "Carbonífera Biodiversa",
                        image: "https://fotonovak.wordpress.com/wp-content/uploads/2018/01/dsc_0428b.jpg?w=768",
                    }}
                    date="5 de Jul, 2025"
                    link="/artigo/1"
                />
                <ArticleCard
                    image="https://i.ibb.co/bMJQm0S5/Whats-App-Image-2025-03-24-at-19-03-56-1.jpg"
                    title="Quem somos e o que é a Carbonífera Biodiversa?"
                    summary="Uma iniciativa criada por estudantes do IFSul para valorizar, mapear e compartilhar a biodiversidade da região carbonífera do Rio Grande do Sul — com a colaboração ativa de toda a comunidade."
                    author = {{
                        name: "Carbonífera Biodiversa",
                        image: "https://fotonovak.wordpress.com/wp-content/uploads/2018/01/dsc_0428b.jpg?w=768",
                    }}
                    date="5 de Jul, 2025"
                    link="/artigo/1"
                />
            </section>
            <Footer />
        </MainContainer>
    );
}
