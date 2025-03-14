import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import { Image } from "antd";

const carouselStyle = {
  width: "400px",
  height: "400px",
  background: "#5F6D36", // Fundo para imagens menores
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden", // Evita que imagens maiores saiam do contêiner
};

const imgStyle = {
  maxWidth: "100%", // Nunca ultrapassa a largura do contêiner
  maxHeight: "100%", // Nunca ultrapassa a altura do contêiner
  objectFit: "contain", // Mantém a proporção original
  backgroundColor: "#5F6D36", // Fundo para imagens verticais
};

const CarouselSpecie = ({ allImages }) => {
  const imagesArray = allImages.split(",").map((image) => image.trim());

  if (imagesArray.length === 0) {
    return <p>Nenhuma imagem disponível.</p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      color={'#5F6D36'} 
      style={{ width: "100%", height: "400px", color: '#5F6D36' }} // Tamanho fixo do carrossel
    >
      {imagesArray.map((image, index) => (
        <SwiperSlide key={index} style={carouselStyle}>
          <Image src={image} alt={`Imagem ${index + 1}`} style={imgStyle} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CarouselSpecie.propTypes = {
  allImages: PropTypes.string.isRequired,
};

export default CarouselSpecie;
