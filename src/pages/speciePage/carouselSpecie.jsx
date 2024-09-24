import React from 'react';
import { Carousel, Image } from 'antd';
import PropTypes from 'prop-types';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CarouselSpecie = ({ allImages }) => {
  // Transformar a string em um array
  const imagesArray = allImages.split(',').map(image => image.trim());

  // Verifique se o array de imagens não está vazio
  if (imagesArray.length === 0) {
    return <p>Nenhuma imagem disponível.</p>;
  }

  return (
    <Carousel dotPosition={"bottom"} arrows >
      {imagesArray.map((image, index) => (
        <div key={index} className="carousel-slide">
          <Image 
            width={'100%'} 
            height={'100%'} 
            src={image} 
            alt={image.alt} 
            style={{ ...contentStyle, background: 'none' }} 
          />
        </div>
      ))}
    </Carousel>
  );
};

CarouselSpecie.propTypes = {
  allImages: PropTypes.string.isRequired, // Agora espera uma string
};

export default CarouselSpecie;
