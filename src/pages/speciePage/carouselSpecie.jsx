import React, { useState } from 'react';
import { Carousel, Image, Radio } from 'antd';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const images = [
  { src: '/brabuleta.jpg', alt: 'Descrição da imagem 1' },
  { src: '/teste2.jpg', alt: 'Descrição da imagem 2' },
  { src: '/bixo.jpg', alt: 'Descrição da imagem 3' },
  { src: '/borboleta.jpg', alt: 'Descrição da imagem 4' },
];

const CarouselSpecie = () => {
  return (
    <>
      <Carousel dotPosition={"bottom"} arrows>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <Image width={'100%'} height={'100%'} src={image.src} alt={image.alt} className="carousel-image w-full" style={{ ...contentStyle, background: 'none' }} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselSpecie;
