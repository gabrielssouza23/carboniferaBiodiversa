import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import MainContainer from "../../components/core/mainContainer";
import { Heart, Share2, UserCircle2 } from "lucide-react";
import { Image } from "antd";
import { motion } from "framer-motion";

const ArticlePage = () => {
  const { articleId } = useParams();

  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false); // Estado para a animação do compartilhar

  let article = {
    title: 'title',
    subtittle: 'subttitle',
    body: 'body'
  }

  if (articleId == 1) {
    article = {
      title: "Caminhada do projeto",
      subtitle: "Resumo da caminhada do Carbonífera Biodiversa",
      body: `A região carbonífera encontra-se localizada na região central do Rio Grande do Sul, onde ocorre, predominantemente, o bioma Pampa e alguns bolsões de Mata Atlântica. No entanto, a riqueza dessa biodiversidade, bem como, o reconhecimento da sua importância, passam despercebidos na nossa sociedade. Assim, no início de 2024, com o objetivo de proporcionar o maior conhecimento e pertencimento sobre a biodiversidade da região nasceu o CARBONÍFERA BIODIVERSA. Uma plataforma virtual e interativa para todos os públicos, com possibilidade de participação de pessoas leigas, taxonomistas amadores e profissionais.

A exemplo, um usuário comum pode acessar, conhecer as espécies apresentadas, contribuir com as informações sobre estas, ou ainda, sugerir a inclusão de novas espécies, postando fotografias e informações sobre a sua localização e características taxonômicas. Por outro lado, um taxonomista profissional pode contribuir com a avaliação das identificações, além de propor e descrever dados sobre a distribuição e descrição das espécies.

A pesquisa foi apresentada para diferentes públicos nas maiores mostras estaduais e nacionais, cronologicamente: Mocitec - Charqueadas, RS, com obtenção de primeiro (1º Lugar) e credenciamento para FEBRACE; FEICIC - Camaquã, RS; FEBRACE - São Paulo, SP. Nestes momentos houveram trocas de conhecimentos entre o público e o projeto que gerou um impacto positivo na comunidade e também o início das oficinas no ensino formal através do ensino fundamental.

A proposta foi construída pelo Alexandre Achilles de Souza Borges, Gabriel de Souza Silva e Krishna Cunha Leite, estudantes do curso técnico em informática do IFSUL campus Charqueadas, os quais seguem como gerenciadores da plataforma e graduandos do curso de Tecnólogo e Sistemas para Internet e Informática Biomédica; a orientação e coorientação são realizadas, respectivamente, pelos professores Josué Michels e Fábio Santos.`,
    };
  }

  const processTextWithBold = (text) => {
    const parts = text.split(/(\*\*[\s\S]+?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2).trim();
        return <b key={index}>{boldText}</b>;
      }
      return part;
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`https://carbonifera-biodiversa.vercel.app//artigo/${articleId}`);
    setShared(true);

    setTimeout(() => {
      setShared(false);
    }, 1000); // Reseta o estado após 1 segundo
  };

  const handleNativeShare = async () => {
    const shareUrl = `https://carbonifera-biodiversa.vercel.app/artigo/${articleId}`;
    const shareTitle = article.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: "Confira este artigo!",
          url: shareUrl,
        });
        console.log("Compartilhado com sucesso!");
        setShared(true);

        setTimeout(() => {
          setShared(false);
        }, 1000); // Reseta o estado após 1 segundo
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      // Fallback: Copiar para a área de transferência
      navigator.clipboard.writeText(shareUrl);
      alert("Link copiado para a área de transferência!");
      setShared(true);

      setTimeout(() => {
        setShared(false);
      }, 1000); // Reseta o estado após 1 segundo
    }
  };

  return (
    <MainContainer currentPage="articles">
      <section className="flex items-center m-auto gap-4 flex-col lg:w-1/2 w-10/12">
        <div className="space-y-2 font-inter flex flex-col justify-start ">
          <h1 className="text-3xl font-bold text-gray-900">{article.title}</h1>
          <h2>{article.subtitle}</h2>
        </div>
        <div className="flex justify-between w-full items-center mt-2 border-slate-200 p-2 border-solid border-y">
          <div className="flex gap-2 items-center">
            <UserCircle2 />
            <p>data 02/2025</p>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setLiked(!liked)}
              className="flex gap-2 items-center"
            >
              <motion.div
                animate={{ scale: liked ? [1, 1.3, 1] : 1 }} // Efeito de "pop"
                transition={{ duration: 0.2 }}
              >
                <Heart
                  color={liked ? "red" : "black"}
                  fill={liked ? "red" : "none"}
                />
              </motion.div>
              Like
            </button>
            {/* <button onClick={handleShare} className="flex gap-2 items-center"> */}
            <button
              onClick={handleNativeShare}
              onTouchStart={handleNativeShare}
              className="flex gap-2 items-center"
            >
              <motion.div
                animate={{ scale: shared ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.2 }}
              >
                <Share2 color={shared ? "blue" : "black"} />
              </motion.div>
              {shared ? "Copiado!" : "Compartilhar"}
            </button>
          </div>
        </div>
        <div className="h-1/2">
        
          {articleId ?  <Image src="https://i.ibb.co/bMJQm0S5/Whats-App-Image-2025-03-24-at-19-03-56-1.jpg" /> 
          : <Image src="https://i.ibb.co/bMJQm0S5/Whats-App-Image-2025-03-24-at-19-03-56-1.jpg" /> }

        
        </div>
        <div className="font-serif text-base custom:text-[18px] max-[728px]:text-[18px]">
          {article.body.split(/\n/).map((paragraph, index) => (
            <p key={index} className="mb-4">
              {processTextWithBold(paragraph.trim())}
            </p>
          ))}
        </div>
      </section>
      <Footer />
    </MainContainer>
  );
};

export default ArticlePage;
