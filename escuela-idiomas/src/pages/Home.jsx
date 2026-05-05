import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// Asegúrate de tener tu imagen en esta ruta
import bgImage from '../assets/fondo-inicio.png'; 

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(15, 32, 75, 0.8)', 
        backgroundBlendMode: 'overlay',
        minHeight: '85vh', 
        display: 'flex',
        alignItems: 'center',
        color: 'white', 
        borderRadius: '16px', 
        margin: { xs: '10px', md: '20px' },
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 800, 
            mb: 3,
            fontSize: { xs: '2.5rem', md: '4rem' } 
          }}
        >
          Domina un nuevo idioma con <span style={{ color: '#00BFA5' }}>Ling Up</span>
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ mb: 5, fontWeight: 300, color: '#E0E0E0' }}
        >
          Aprende con confianza y creatividad. Descubre nuestros cursos interactivos y lleva tu comunicación al siguiente nivel.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            component={RouterLink} 
            to="/idiomas"
            sx={{ 
              backgroundColor: '#00BFA5', 
              color: '#fff',
              fontSize: '1.1rem',
              padding: '10px 30px',
              borderRadius: '30px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#009688' }
            }}
          >
            Explorar Idiomas
          </Button>
          <Button 
            variant="outlined" 
            component={RouterLink} 
            to="/contactos"
            sx={{ 
              borderColor: '#fff', 
              color: '#fff',
              fontSize: '1.1rem',
              padding: '10px 30px',
              borderRadius: '30px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': { borderColor: '#00BFA5', backgroundColor: 'rgba(0, 191, 165, 0.1)' }
            }}
          >
            Saber más
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;