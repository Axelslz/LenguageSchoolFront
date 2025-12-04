import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '90vh',
        width: '100%',
        overflow: 'hidden',
        // Usamos un degradado sobre la imagen para que el texto siempre se vea
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Efecto parallax (el fondo se queda quieto al hacer scroll)
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
        
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontSize: { xs: '2.5rem', md: '4rem' } // Responsivo: más pequeño en celular
          }}
        >
           Idiomas
        </Typography>
        
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 5, 
            fontWeight: 300, 
            opacity: 0.9,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Rompe las barreras del idioma en un ambiente diseñado para aprender, conectar y disfrutar.
        </Typography>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            href="#idiomas"
            sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
          >
            Ver Cursos
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" // Blanco
            size="large"
            href="#contacto"
            sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'white', color: 'white' }}
          >
            Contáctanos
          </Button>
        </Stack>

      </Container>
    </Box>
  );
};

export default HeroSection;