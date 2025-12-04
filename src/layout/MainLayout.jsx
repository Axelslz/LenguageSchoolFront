import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material'; // Nota: Ya no importamos Container
import Navbar from '../components/common/Navbar';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Navbar />

      {/* CAMBIO CLAVE:
          Antes aquí había un <Container> que limitaba el ancho y agregaba márgenes blancos.
          Lo cambiamos por un <Box> sin restricciones.
          Ahora, tu HeroSection podrá tocar los bordes de la pantalla (izquierda y derecha).
          
          También quitamos el 'py: 4' (padding vertical) para que la imagen pegue 
          directamente con el Navbar sin espacios blancos arriba.
      */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet /> 
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 Escuela de Idiomas - Todos los derechos reservados
        </Typography>
      </Box>
      
    </Box>
  );
};

export default MainLayout;