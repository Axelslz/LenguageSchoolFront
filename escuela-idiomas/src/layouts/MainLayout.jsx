// ✅ MAINLAYOUT CORREGIDO
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar'; // Asumiendo que aquí tienes tu barra de navegación

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Tu barra de navegación arriba */}
      <Navbar />
      
      {/* El contenedor principal de tus vistas, SIN MÁRGENES NI PADDING */}
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <Outlet /> 
      </Box>
    </Box>
  );
};

export default MainLayout;