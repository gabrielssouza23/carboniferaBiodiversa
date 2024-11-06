import React, { useState } from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import TableComponent from './table';
import { Button } from 'antd';

export default function ManageContribution() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      navigate('/');
    }
  }, [navigate]); // Adicionando 'navigate' nas dependências

  
  return (
    <MainContainer currentPage='dashboard'>
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <img className="mx-auto h-16 w-auto" src="/logo.svg" alt="Your Company" />
        <h2 className="pb-4 mt-10 text-center text-2xl font-semibold font-poppins uppercase leading-9 tracking-tight text-custom-green">
          Contribuições - Espécies
        </h2>

            
      </div>

      <Footer />
    </MainContainer>
  );
}
