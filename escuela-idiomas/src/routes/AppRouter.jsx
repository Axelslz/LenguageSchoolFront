import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import QuienesSomos from '../pages/QuienesSomos'; 
import Idiomas from '../pages/Idiomas';
import Contactos from '../pages/Contactos';
import Empresas from '../pages/Empresas';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="idiomas" element={<Idiomas />} />
          <Route path="contactos" element={<Contactos />} />
          <Route path="empresas" element={<Empresas />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;