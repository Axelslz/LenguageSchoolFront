import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/system';
import bgImage from '../assets/fondo-inicio.png'; 

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
        width: '100%', 
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <Box 
        sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(17, 34, 78, 0.9) 0%, rgba(0, 191, 165, 0.4) 100%)',
          zIndex: 1
        }} 
      />

      <Container 
        maxWidth="md" 
        sx={{ 
          textAlign: 'center', 
          py: 8,
          position: 'relative',
          zIndex: 2, 
          animation: `${float} 6s ease-in-out infinite` 
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 900, 
            mb: 3,
            color: '#FFFFFF',
            fontSize: { xs: '2.8rem', md: '4.5rem' },
            textShadow: '0px 4px 15px rgba(0,0,0,0.3)',
            animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
          }}
        >
          Domina un nuevo idioma con <span style={{ color: '#00BFA5' }}>Ling Up</span>
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 6, 
            fontWeight: 400, 
            color: '#E0E0E0',
            fontSize: { xs: '1.1rem', md: '1.4rem' },
            lineHeight: 1.6,
            opacity: 0, 
            animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards`,
          }}
        >
          Aprende con confianza y creatividad. Descubre nuestros cursos interactivos y lleva tu comunicación al siguiente nivel en un entorno diseñado para ti.
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 3, 
            flexWrap: 'wrap',
            opacity: 0, 
            animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards`,
          }}
        >
          <Button 
            variant="contained" 
            component={RouterLink} 
            to="/idiomas"
            sx={{ 
              backgroundColor: '#00BFA5', 
              color: '#fff',
              fontSize: '1.2rem',
              padding: '12px 35px',
              borderRadius: '50px',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(0, 191, 165, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                backgroundColor: '#009688',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 30px rgba(0, 191, 165, 0.6)',
              }
            }}
          >
            Explorar Idiomas
          </Button>
          
          <Button 
            variant="outlined" 
            component={RouterLink} 
            to="/quienes-somos"
            sx={{ 
              borderColor: 'rgba(255,255,255,0.7)', 
              color: '#fff',
              fontSize: '1.2rem',
              padding: '12px 35px',
              borderRadius: '50px',
              textTransform: 'none',
              fontWeight: 'bold',
              backdropFilter: 'blur(5px)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                borderColor: '#00BFA5', 
                backgroundColor: 'rgba(0, 191, 165, 0.15)',
                transform: 'translateY(-3px)',
              }
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