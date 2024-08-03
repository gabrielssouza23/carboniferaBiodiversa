import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const images = [
  { src: '/brabuleta.jpg', alt: 'Descrição da imagem 1' },
  { src: '/teste2.jpg', alt: 'Descrição da imagem 2' },
  { src: '/bixo.jpg', alt: 'Descrição da imagem 3' },
  { src: '/borboleta.jpg', alt: 'Descrição da imagem 4' },
];

export default function CarouselHome() {
  return (
    <Carousel autoplay>
      {/* <div>
        <img src="/teste.JPGs" alt="" />
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
      {images.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img src={image.src} alt={image.alt} className="carousel-image" style={contentStyle} />
        </div>
      ))}
    </Carousel>
  )
}