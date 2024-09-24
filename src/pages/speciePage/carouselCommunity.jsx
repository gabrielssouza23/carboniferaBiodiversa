import React, { useState, useEffect } from 'react';
import { Carousel, Image, Spin } from 'antd';
import { CircleUser } from 'lucide-react';
import api from '../../services/api';
import Loader from '../../components/loader';

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

const CarouselCommunity = ({ specieId }) => {
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    api.get(`/species/specie-contributions/${specieId}`)
      .then((response) => {
        const imagesArray = response.data.all_images.split(', ');
        const namesArray = response.data.all_names.split(', ');

        const contributionsData = imagesArray.map((image, index) => ({
          image,
          name: namesArray[index] || 'Sem nome',
        }));

        setContributions(contributionsData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
        setLoading(false);
      });
  }, [specieId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Carousel dotPosition="bottom" arrows>
      {contributions.map((contribution, index) => (
        <div key={index} className="carousel-slide">
          <Image
            width="100%"
            height="100%"
            src={contribution.image}
            alt={contribution.name || `Imagem ${index + 1}`}
            className="carousel-image w-full"
            style={{ ...contentStyle, background: 'none' }}
          />
          <div style={descriptionStyle} className="flex gap-5 align-middle items-center justify-center">
            <span className="w-2">
              <CircleUser />
            </span>
            {contribution.name || 'Sem descrição'}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCommunity;
