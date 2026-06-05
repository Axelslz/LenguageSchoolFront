import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { keyframes } from '@mui/system';
import fondoInicio from '../assets/fondo-inicio.png';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const colors = {
  azul: '#11224E',
  aqua: '#00BFA5',
  blanco: '#FFFFFF',
};

const QuienesSomos = () => {
  return (
    <Box 
      sx={{ 
        backgroundImage: `url(${fondoInicio})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }, 
        width: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%)',
          zIndex: 1
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}> 
        <Grid container spacing={6} alignItems="center">
          
          <Grid item xs={12} md={7}>
            <Box 
              sx={{ 
                pr: { md: 4 }, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
              }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 900, 
                  color: colors.blanco, 
                  mb: 1,
                  fontSize: { xs: '2.8rem', md: '4rem' },
                  letterSpacing: '-1.5px',
                  textShadow: '0px 4px 15px rgba(0,0,0,0.5)', 
                  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards`
                }}
              >
                Quiénes <span style={{ color: colors.aqua }}>Somos</span>
              </Typography>
              
              <Box 
                sx={{ 
                  width: '100px', 
                  height: '6px', 
                  bgcolor: colors.aqua, 
                  mb: 4, 
                  borderRadius: '4px',
                  opacity: 0,
                  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards` 
                }} 
              />
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#F8FAFC', 
                  mb: 3, 
                  fontSize: '1.25rem', 
                  lineHeight: 1.8,
                  fontWeight: 400,
                  textAlign: 'justify',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.5)', 
                  opacity: 0,
                  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards`
                }}
              >
                <strong style={{ color: colors.blanco, fontWeight: 700 }}>Bienvenido a LingUp</strong>, el espacio donde tu voz encuentra un nuevo idioma. Transformamos el aprendizaje de idiomas en una herramienta de alto rendimiento. Somos un centro diseñado para cerrar la brecha entre la teoría y el dominio profesional.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#F8FAFC', 
                  fontSize: '1.2rem', 
                  lineHeight: 1.8,
                  fontWeight: 400,
                  textAlign: 'justify',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.5)', 
                  opacity: 0,
                  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards`
                }}
              >
                Creamos experiencias de aprendizaje de acuerdo a tus necesidades de tiempo, espacio y rendimiento, permitiéndote conectar con el mundo real. Ya sea que busques apoyo para tu carrera o empezar desde cero, aquí encontrarás el impulso para llegar más lejos.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              
              <Card 
                elevation={10}
                sx={{ 
                  borderRadius: '24px', 
                  bgcolor: 'rgba(255, 255, 255, 0.95)', 
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: 0,
                  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards`,
                  transition: 'all 0.4s ease',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 40px rgba(0, 191, 165, 0.3)'
                  }
                }}
              >
                <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '8px', bgcolor: colors.aqua }} />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(0, 191, 165, 0.1)', p: 1.5, borderRadius: '14px', display: 'flex' }}>
                      <TrackChangesIcon sx={{ color: colors.aqua, fontSize: 32 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: colors.azul }}>
                      Nuestra Misión
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
                    Facilitar el dominio de lenguas extranjeras a través de un acompañamiento humano y profesional, brindando las herramientas necesarias para potenciar tu perfil en un entorno de confianza.
                  </Typography>
                </CardContent>
              </Card>

              <Card 
                elevation={10}
                sx={{ 
                  borderRadius: '24px', 
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: 0,
                  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards`,
                  transition: 'all 0.4s ease',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 40px rgba(17, 34, 78, 0.3)'
                  }
                }}
              >
                <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '8px', bgcolor: colors.azul }} />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(17, 34, 78, 0.05)', p: 1.5, borderRadius: '14px', display: 'flex' }}>
                      <VisibilityIcon sx={{ color: colors.azul, fontSize: 32 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: colors.azul }}>
                      Nuestra Visión
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
                    Consolidarnos como el centro de idiomas referente, siendo la primera elección para quienes buscan expresarse con naturalidad y evolucionar profesionalmente.
                  </Typography>
                </CardContent>
              </Card>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default QuienesSomos;