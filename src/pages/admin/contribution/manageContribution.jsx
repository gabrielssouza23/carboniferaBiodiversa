import React, { useState } from 'react';
import MainContainer from '../../../components/core/mainContainer';
import Footer from '../../../components/footer';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Select } from 'antd';
import { AtSign, CircleArrowLeft, MapPin, Phone, UserRound, Calendar, PawPrint } from 'lucide-react';
import CarouselContribution from './carouselContribution';
import Divider from '../../../components/divider.jsx';
import ListDivider from '@mui/joy/ListDivider';
import { Box, List, ListItem, ListItemDecorator, Typography } from '@mui/joy';
import ImageAnalyzer from './imageAnalyzer.jsx';
import { color } from 'storybook/internal/theming';

export default function ManageContribution() {
  const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState(null);  // Estado para armazenar o src da imagem

  React.useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      navigate('/');
    }
  }, [navigate]);

  // Função para atualizar o src da imagem
  const handleImageChange = (src) => {
    setImageSrc(src);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <MainContainer currentPage='dashboard'>
      <div className="flex flex-col justify-center px-6 lg:px-8">
        <img className="mx-auto h-16 w-auto" src="/logo.svg" alt="Your Company" />
        <h2 className="pb-4 mt-10 text-center text-2xl font-semibold font-poppins uppercase leading-9 tracking-tight text-custom-green">
          Contribuições - Espécies
        </h2>
        <div className="flex">
          <Button
            type="secondary"
            className='bg-custom-green text-white hover:bg-lime-900'
            onClick={() => navigate('/admin/')}
          >
            Voltar
            <CircleArrowLeft />
          </Button>
        </div>
      </div>

      <div>
        <h2 className='text-center text-xl font-semibold font-poppins uppercase leading-9 tracking-tight text-custom-green'>Informações</h2>
        <Divider centered={true} />
      </div>

      <section className='border flex-row flex items-center justify-center gap-3'>

        <div className=' flex items-center justify-center flex-col'>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>
              <Typography level="body-xs" sx={{ mb: 2 }}>
              </Typography>
              <List variant="outlined" sx={{ minWidth: 240, borderRadius: 'sm' }}>
                <ListItem>
                  <ListItemDecorator>
                    <UserRound />
                  </ListItemDecorator>
                  Gabriel
                </ListItem>
                <ListDivider inset="gutter" />
                <ListItem>
                  <ListItemDecorator>
                    <AtSign />
                  </ListItemDecorator>
                  gabriel.desouzasilva2014@gmail.com
                </ListItem>
                <ListDivider inset="gutter" />
                <ListItem>
                  <ListItemDecorator>
                    <Phone />
                  </ListItemDecorator>
                  51999152266
                </ListItem>
                <ListDivider inset="gutter" />
                <ListItem>
                  <ListItemDecorator>
                    <MapPin />
                  </ListItemDecorator>
                  Parcão
                </ListItem>

                <form action="">

                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator>
                      <MapPin />
                    </ListItemDecorator>
                    <Input placeholder='Latitude'>

                    </Input>
                  </ListItem>

                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator>
                      <MapPin />
                    </ListItemDecorator>
                    <Input placeholder='Longitude'>

                    </Input>
                  </ListItem>

                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator>
                      <Calendar />
                    </ListItemDecorator>
                    <Input placeholder='Data/hora'>

                    </Input>
                  </ListItem>

                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator>
                      <PawPrint />
                    </ListItemDecorator>
                    <Select
                    className='w-full'
                    required
                      showSearch
                      placeholder="Selecione uma especie"
                      optionFilterProp="label"
                      onChange={onChange}
                      onSearch={onSearch}
                      options={[
                        {
                          value: 'jack',
                          label: 'Jack',
                        },
                        {
                          value: 'lucy',
                          label: 'Lucy',
                        },
                        {
                          value: 'tom',
                          label: 'Tom',
                        },
                      ]}
                    />
                  </ListItem>

                  <ListDivider inset="gutter" />
                  <ListItem className='flex items-center justify-center w-full' >
                   <Button type='primary' className='w-1/2' >Aprovar</Button>
                   <Button type='primary' className='btn-deny w-1/2' >Recusar</Button>
                  </ListItem>
                </form>

              </List>

            </div>
          </Box>
        </div>

        <div className="w-7/12 relative">
          <CarouselContribution onImageChange={handleImageChange} />
        </div>


      </section>
      <div>
        <ImageAnalyzer imageSrc={imageSrc} />
      </div>


      <Footer />
    </MainContainer>
  );
}
