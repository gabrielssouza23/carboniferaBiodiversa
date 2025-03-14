import React, { useState } from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import TableComponent from './table';
import { Button } from 'antd';
import CreateSpeciesModal from './createSpeciesModal';
import { HandHeart, CirclePlus, CircleArrowLeft } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  React.useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      navigate('/');
    }
  }, [navigate]); // Adicionando 'navigate' nas dependências

  const handleAddSpecies = (newSpecies) => {
    // Função que será chamada para atualizar a tabela com a nova espécie adicionada
    console.log('Nova espécie adicionada:', newSpecies);
    // Aqui você pode atualizar o estado que contém as espécies exibidas na tabela, se necessário
  };

  return (
    <MainContainer currentPage='dashboard'>
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <img className="mx-auto h-16 w-auto" src="/logo.svg" alt="Your Company" />
        <h2 className="pb-4 mt-10 text-center text-2xl font-semibold font-poppins uppercase leading-9 tracking-tight text-custom-green">
          CRUD - Espécies
        </h2>

        <div className="flex pb-3 gap-3">
          <Button
            type="secondary"
            className='bg-custom-green text-white hover:bg-lime-900'
            onClick={() => navigate('/admin/')}
          >
            Voltar
            <CircleArrowLeft />
          </Button>
          <Button
            type="secondary"
            className='bg-custom-green text-white hover:bg-lime-900'
            onClick={() => setIsModalVisible(true)}
          >
            Adicionar Espécie
            <CirclePlus />
          </Button>
          <Button
            type="secondary"
            className='bg-custom-green text-white hover:bg-lime-900'
            onClick={() => navigate('/admin/contribuicao')}
          >
            Contribuições
            <HandHeart />
          </Button>
        </div>
        <TableComponent />
      </div>

      <CreateSpeciesModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddSpecies={handleAddSpecies}
      />

      <Footer />
    </MainContainer>
  );
}
