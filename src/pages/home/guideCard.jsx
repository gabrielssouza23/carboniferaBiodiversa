import React from 'react';
import { Card, Col, Row } from 'antd';

export default function GuideCard() {
  return (
    <Row gutter={[24, 24]} className='justify-center flex-wrap px-4 sm:px-32'>
      <Col xs={24} sm={12} md={8} className='w-full'>
        <Card title="Biodiversidade" bordered={true} className='rounded-none border-custom-green border-1'>
          Aprecie a diversidade da fauna e flora da região Carbonífera. Esta seção oferece uma visão geral dos ecossistemas e das interações entre diferentes espécies.
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} className='w-full'>
        <Card title="Catálogo" bordered={true} className='rounded-none border-custom-green border-1'>
          Navegue pelo nosso catálogo para encontrar informações detalhadas sobre as diversas espécies presentes na região. Cada entrada inclui dados sobre o habitat, características e curiosidades das espécies.
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} className='w-full'>
        <Card title="Famílias e Espécies" bordered={true} className='rounded-none border-custom-green border-1'>
          Descubra as famílias e espécies que compõem a biodiversidade local. Explore cada grupo e aprenda sobre suas características e importância ecológica.
        </Card>
      </Col>
    </Row>
  );
}
