import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Catalog from './pages/catalog';
import Specie from './pages/speciePage';
import Contribution from './pages/contributionPage';
import Articles from './pages/articles';
import Admin from './pages/admin';
import Login from './pages/admin/login';
import ManageContribution from './pages/admin/contribution/manageContribution';
import ArticlePage from './pages/articles/articlePage';
import NotFoundPage from './pages/NotFoundPage'; // Importa a página 404

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/catalogo/:specieId" element={<Specie />} />
        <Route path="/contribuir" element={<Contribution />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigo/:articleId" element={<ArticlePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/contribuicao" element={<ManageContribution />} />
        
        {/* Rota de 404 - Página Não Encontrada */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
