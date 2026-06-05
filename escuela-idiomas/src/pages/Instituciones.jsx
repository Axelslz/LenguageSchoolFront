

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/system';
import LanguageIcon from '@mui/icons-material/Language';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const colores = {
  azulProfundo: '#0A192F', 
  azulLogo: '#11224E',
  aqua: '#00BFA5',
  grisFondo: '#F8F9FA',
  textoOscuro: '#2D3748',
  textoClaro: '#A0AEC0'
};

const Instituciones = () => {
  return (
    <Box sx={{ bgcolor: colores.grisFondo, minHeight: '100vh', pb: 0 }}>
      
      <Box sx={{ 
        position: 'relative',
        backgroundImage: 'url(https://res.cloudinary.com/dvjjpeyzh/image/upload/v1780612857/2_2_yvw8pi.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 15, md: 20 }, 
        pb: { xs: 15, md: 20 },
        px: 2,
        overflow: 'hidden'
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', animation: `${fadeUp} 0.8s ease-out` }}>
          <Typography variant="overline" sx={{ color: colores.aqua, fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block', fontSize: '0.9rem' }}>
            Soluciones para Preparatorias y Universidades
          </Typography>
          <Typography variant="h2" component="h1" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 4, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1 }}>
            Alianzas del futuro:<br/>Elevamos el nivel global de tu institution.
          </Typography>
          <Typography variant="h6" sx={{ color: colores.textoClaro, fontWeight: 400, lineHeight: 1.6, maxWidth: '800px', mx: 'auto' }}>
            En LingUp, transformamos el aprendizaje de idiomas en una ventaja competitiva institucional. Conectamos el talento de tus estudiantes con las exigencias del entorno global.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: -12, md: -16 }, position: 'relative', zIndex: 2, mb: { xs: 10, md: 15 }, animation: `${fadeUp} 0.8s ease-out 0.2s backwards` }}>
        <Box sx={{ 
          width: '100%', 
          aspectRatio: { xs: '16/9', md: '21/9' }, 
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)', 
          position: 'relative',
          border: '4px solid #FFFFFF' 
        }}>
          <Box 
            component="img"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Campus universitario internacional"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center" sx={{ mb: { xs: 15, md: 20 } }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: colores.azulLogo, fontWeight: 800, mb: 4, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>
              ¿Por qué las grandes instituciones eligen LingUp?
            </Typography>
            <Typography variant="body1" sx={{ color: colores.textoOscuro, fontSize: '1.15rem', lineHeight: 1.8, mb: 3 }}>
              El éxito de una institución educativa se mide por el impacto de sus egresados en el mundo real. 
            </Typography>
            <Typography variant="body1" sx={{ color: colores.textoOscuro, fontSize: '1.15rem', lineHeight: 1.8, mb: 3 }}>
              Hoy en día, el dominio de un second o tercer idioma ya no es un plus; es el <strong>estándar mínimo</strong> exigido por el mercado laboral y científico.
            </Typography>
            <Typography variant="body1" sx={{ color: colores.textoOscuro, fontSize: '1.15rem', lineHeight: 1.8, p: 3, bgcolor: 'rgba(0, 191, 165, 0.08)', borderRadius: '12px', borderLeft: `4px solid ${colores.aqua}` }}>
              Al integrar LingUp en la oferta de tu preparatoria o universidad, no solo sumas un programa de idiomas: adquieres un aliado estratégico que impulsa la excelencia académica y la proyección profesional.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Box 
                component="img"
                src="https://res.cloudinary.com/dvjjpeyzh/image/upload/v1780687370/01df28d0-f9db-486a-902d-fbfdfb0b6a8f.png"
                alt="Estudiantes en el campus"
                sx={{ 
                  width: { xs: '100%', sm: '50%' },
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }}
              />
              <Box 
                component="img"
                src="https://res.cloudinary.com/dvjjpeyzh/image/upload/v1780685895/860d6ac3-43d9-4947-925f-fdeddfa64950.png"
                alt="Graduación y éxito"
                sx={{ 
                  width: { xs: '100%', sm: '50%' },
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  mt: { xs: 0, sm: 6 }
                }}
              />
            </Box>
          </Grid>
        </Grid> 

        <Box sx={{ mb: { xs: 15, md: 20 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ color: colores.azulLogo, fontWeight: 800, mb: 2 }}>
              Beneficios Clave: Una inversión bidireccional
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ height: '100%', p: 5, borderRadius: '24px', border: '1px solid #E2E8F0', bgcolor: '#FFFFFF', transition: 'all 0.3s ease', '&:hover': { borderColor: colores.aqua, boxShadow: '0 10px 30px rgba(0, 191, 165, 0.1)' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ width: 60, height: 60, borderRadius: '16px', bgcolor: 'rgba(0, 191, 165, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                    <LanguageIcon sx={{ fontSize: 32, color: colores.aqua }} />
                  </Box>
                  <Typography variant="h5" sx={{ color: colores.azulLogo, fontWeight: 800 }}>
                    Para tus Alumnos
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: colores.textoOscuro, fontWeight: 700, mb: 2 }}>
                  Herramientas para un futuro sin fronteras
                </Typography>
                <Typography variant="body1" sx={{ color: colores.textoOscuro, fontSize: '1.1rem', lineHeight: 1.7 }}>
                  <strong>Inserción Laboral de Alto Impacto:</strong> Egresados listos para integrarse a empresas trasnacionales o puestos de Alta Dirección.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ height: '100%', p: 5, borderRadius: '24px', border: '1px solid #E2E8F0', bgcolor: '#FFFFFF', transition: 'all 0.3s ease', '&:hover': { borderColor: colores.azulLogo, boxShadow: '0 10px 30px rgba(17, 34, 78, 0.1)' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ width: 60, height: 60, borderRadius: '16px', bgcolor: 'rgba(17, 34, 78, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                    <WorkspacePremiumIcon sx={{ fontSize: 32, color: colores.azulLogo }} />
                  </Box>
                  <Typography variant="h5" sx={{ color: colores.azulLogo, fontWeight: 800 }}>
                    Para tu Institución
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: colores.textoOscuro, fontWeight: 700, mb: 2 }}>
                  Reputación y Liderazgo Educativo
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <TrendingUpIcon sx={{ color: colores.aqua, mt: 0.5, mr: 1.5 }} />
                    <Typography variant="body1" sx={{ color: colores.textoOscuro, fontSize: '1.1rem', lineHeight: 1.6 }}>
                      <strong>Prestigio y Diferenciación:</strong> Posiciona a tu escuela como un referente de vanguardia y educación global en la región.
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <TrendingUpIcon sx={{ color: colores.aqua, mt: 0.5, mr: 1.5 }} />
                    <Typography variant="body1" sx={{ color: colores.textoOscuro, fontSize: '1.1rem', lineHeight: 1.6 }}>
                      <strong>Casos de Éxito Visibles:</strong> Alumnos mejor preparados se traducen en egresados destacados que elevan el valor de tu marca institucional.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

      </Container>

      <Box sx={{ 
        position: 'relative',
        backgroundImage: 'url(https://res.cloudinary.com/dvjjpeyzh/image/upload/v1780612857/2_2_yvw8pi.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 15, md: 20 }, 
        pb: { xs: 15, md: 20 },
        px: 2,
        overflow: 'hidden', 
        textAlign: 'center' 
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
            Diseñemos el próximo caso de éxito de tu institución.
          </Typography>
          <Typography variant="body1" sx={{ color: colores.textoClaro, fontSize: '1.25rem', mb: 6, lineHeight: 1.8 }}>
            El mañana de tus estudiantes se construye con las alianzas que decidas hoy. Permítenos presentarte cómo LingUp puede integrarse a tu visión educativa.
          </Typography>
          <Button
            component={RouterLink}
            to="/contactos"
            variant="contained"
            size="large"
            sx={{
              bgcolor: colores.aqua,
              color: colores.azulProfundo, 
              px: { xs: 4, md: 6 },
              py: 2,
              fontSize: '1.15rem',
              fontWeight: 800,
              borderRadius: '50px',
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(0, 191, 165, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFFFFF',
                color: colores.aqua,
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 30px rgba(0, 191, 165, 0.6)'
              }
            }}
          >
            Agendar una sesión de consultoría académica
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default Instituciones;