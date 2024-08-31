import React, { useState } from 'react';
import { Carousel, Image, Radio } from 'antd';
import { CircleUser } from 'lucide-react';

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

const descriptionStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
  };

const images = [
  { src: '/brabuleta.jpg', alt: 'Descrição da imagem 1' },
  { src: '/teste2.jpg', alt: 'Descrição da imagem 2' },
  { src: '/bixo.jpg', alt: 'Descrição da imagem 3' },
  { src: '/borboleta.jpg', alt: 'Descrição da imagem 4' },
];

const CarouselCommunity = () => {
  return (
    <>
      <Carousel dotPosition={"bottom"} arrows>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <Image width={'100%'} height={'100%'} src={image.src} alt={image.alt} className="carousel-image w-full" style={{ ...contentStyle, background: 'none' }} />
            <div style={descriptionStyle} className='flex gap-5 align-middle items-center justify-center'><span className='w-2'><CircleUser /></span>Descrição da Imagem 2</div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselCommunity;
