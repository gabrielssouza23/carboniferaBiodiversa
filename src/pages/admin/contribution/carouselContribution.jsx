import React, { forwardRef } from 'react';
import { Image } from 'antd';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
};

const contribution = {
  image: "https://i.ibb.co/j61y87w/35c647436c28.jpg",
  name: "Orquídea Roxa",
};

const CarouselContribution = forwardRef(({ onImageChange }, ref) => {
  const { image, name } = contribution;

  // Chama onImageChange quando a imagem for carregada
  React.useEffect(() => {
    if (onImageChange) {
      onImageChange(image);  // Atualiza o estado no componente pai
    }
  }, [image, onImageChange]);

  return (
    <Image
      ref={ref}
      width="100%"
      height="100%"
      src={image}
      alt={name || "Imagem"}
      className="carousel-image w-full"
      style={{ ...contentStyle, background: 'none' }}
    />
  );
});

CarouselContribution.displayName = 'CarouselContribution';

export default CarouselContribution;
