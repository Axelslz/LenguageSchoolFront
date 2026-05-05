import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
// Importamos la nueva vista real
import QuienesSomos from '../pages/QuienesSomos'; 

// Componentes temporales restantes
const Idiomas = () => <h1>Idiomas (Aquí irán las Flip Cards)</h1>;
const Contactos = () => <h1>Contactos</h1>;

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Sustituimos la ruta con el componente real */}
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="idiomas" element={<Idiomas />} />
          <Route path="contactos" element={<Contactos />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;