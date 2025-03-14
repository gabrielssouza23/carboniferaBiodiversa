import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer';
import MainContainer from '../../components/core/mainContainer';
import { Heart, Share2, UserCircle2 } from 'lucide-react';
import { Image } from 'antd';
import { motion } from "framer-motion";

const ArticlePage = () => {
  const { articleId } = useParams();

  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false); // Estado para a animação do compartilhar

  const article = {
    title: "Titulo Interessante do artigo",
    subtitle: "subtitulo interessante blablablablabla",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum \n**Why do we use it?**\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes on purpose(injected humour and the like)."
  };

  const processTextWithBold = (text) => {
    const parts = text.split(/(\*\*[\s\S]+?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2).trim();
        return <b key={index}>{boldText}</b>;
      }
      return part;
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`http://localhost:5173/artigo/${articleId}`);
    setShared(true);

    setTimeout(() => {
      setShared(false);
    }, 1000); // Reseta o estado após 1 segundo
  };

  const handleNativeShare = async () => {
    const shareUrl = `http://localhost:5173/artigo/${articleId}`;
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
        <div className='space-y-2 font-inter '>
          <h1 className='text-3xl font-bold text-gray-900'>
            {article.title}
          </h1>
          <h2>
            {article.subtitle}
          </h2>
        </div>
        <div className='flex justify-between w-full items-center mt-2 border-slate-200 p-2 border-solid border-y'>
          <div className='flex gap-2 items-center'>
            <UserCircle2 />
            <p>data</p>
          </div>
          <div className='flex gap-2 items-center'>
            <button onClick={() => setLiked(!liked)} className='flex gap-2 items-center'>
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
            <button onClick={handleNativeShare} onTouchStart={handleNativeShare} className="flex gap-2 items-center">
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
        <div className='h-1/2'>
          <Image src="https://i.ibb.co/BgtY2sh/ae62570552a3.jpg" />
        </div>
        <div className='font-serif text-base custom:text-[18px] max-[728px]:text-[18px]'>
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