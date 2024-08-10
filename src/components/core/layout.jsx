import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from './mainContainer';

const Layout = () => {
  return (
    <>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;