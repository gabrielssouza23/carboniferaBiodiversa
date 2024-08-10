import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Button } from 'antd';
import styled from 'styled-components';



export default function OverflowCard() {

    const CustomButton = styled(Button)`
  background-color: #5F6D36 !important; /* Força a cor de fundo */
  color: white !important; /* Força a cor do texto */
  font-weight: bold !important;

  &:hover {
    background-color: #5F6D36 !important; /* Cor de fundo ao passar o mouse */
    color: #f0f0f0 !important; /* Cor do texto ao passar o mouse */
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;
    return (
        <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src="/queroqueroCarousel.jpg"
                        srcSet="/queroqueroCarousel.jpg 2x"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent >
                <Typography level="title-lg" sx={{ color: '#5F6D36', fontFamily: 'Popins' }}>QueroQuero</Typography>
                <Typography level="body-sm">(Vanellus chilensis)</Typography>
                <CustomButton type="primary"  >
                    Ver Mais
                </CustomButton> 
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                <Divider inset="context" />
            </CardOverflow>
        </Card>
    );
}
