// src/pages/NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4 animate__animated animate__fadeIn">
          404
        </h1>
        <p className="text-xl text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Ops! A página que você procura não existe.
        </p>
        <p className="text-md text-gray-500 mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Talvez você tenha digitado um link errado ou a página tenha sido movida.
        </p>
        <Link to="/" className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-lg transition hover:bg-blue-700">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
