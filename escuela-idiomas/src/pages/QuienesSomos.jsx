import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityIcon from '@mui/icons-material/Visibility';

const colors = {
  azul: '#11224E',
  aqua: '#00BFA5',
  blanco: '#FFFFFF',
};

const QuienesSomos = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: colors.azul, // Fondo azul institucional para máximo contraste
        
        // OPCIONAL: Si prefieres usar el patrón de tu imagen en lugar del color sólido, 
        // borra la línea de arriba (bgcolor) y descomenta las siguientes 3 líneas:
        // backgroundImage: `url('/2,2.jpg')`, 
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',

        minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }, 
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 8 } 
      }}
    >
      <Container maxWidth="lg"> 
        <Grid container spacing={6} alignItems="stretch">
          
          {/* LADO IZQUIERDO: TEXTO PRINCIPAL */}
          <Grid item xs={12} md={7}>
            <Box 
              sx={{ 
                pr: { md: 4 }, 
                height: '100%', 
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
                  color: colors.blanco, // Título en blanco
                  mb: 1,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  letterSpacing: '-1px'
                }}
              >
                Quiénes <span style={{ color: colors.aqua }}>Somos</span>
              </Typography>
              
              <Box sx={{ width: '80px', height: '6px', bgcolor: colors.aqua, mb: 4, borderRadius: '4px' }} />
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#E2E8F0', // Gris muy clarito para que no lastime la vista sobre fondo oscuro
                  mb: 3, 
                  fontSize: '1.15rem', 
                  lineHeight: 1.8,
                  fontWeight: 400
                }}
              >
                <strong style={{ color: colors.blanco, fontWeight: 700 }}>Bienvenido a Ling Up</strong>, el espacio donde tu voz encuentra un nuevo idioma. Transformamos el aprendizaje de idiomas en una herramienta de alto rendimiento. Somos un centro diseñado para cerrar la brecha entre la teoría y el dominio profesional.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#E2E8F0',
                  fontSize: '1.15rem', 
                  lineHeight: 1.8,
                  fontWeight: 400
                }}
              >
                Creamos experiencias de aprendizaje de acuerdo a tus necesidades de tiempo, espacio y rendimiento, permitiéndote conectar con el mundo real. Ya sea que busques apoyo para tu carrera, continuar avanzando o empezar desde cero, aquí encontrarás el impulso para llegar más lejos.
              </Typography>
            </Box>
          </Grid>

          {/* LADO DERECHO: MISIÓN Y VISIÓN (Se quedan blancas para que resalten) */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%', justifyContent: 'center' }}>
              
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: '16px', 
                  bgcolor: colors.blanco,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}
              >
                <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', bgcolor: colors.aqua, borderRadius: '16px 0 0 16px' }} />
                <CardContent sx={{ p: { xs: 3, sm: 4 }, pl: { xs: 4, sm: 5 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box sx={{ bgcolor: 'rgba(0, 191, 165, 0.1)', p: 1, borderRadius: '10px', display: 'flex' }}>
                      <TrackChangesIcon sx={{ color: colors.aqua, fontSize: 28 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: colors.azul }}>
                      Nuestra Misión
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '1rem' }}>
                    Facilitar el dominio de lenguas extranjeras a través de un acompañamiento humano y profesional, brindando las herramientas necesarias para conectar con el mundo, potenciar tu perfil y descubrir nuevas perspectivas en un entorno de confianza.
                  </Typography>
                </CardContent>
              </Card>

              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: '16px', 
                  bgcolor: colors.blanco,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}
              >
                <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', bgcolor: colors.azul, borderRadius: '16px 0 0 16px' }} />
                <CardContent sx={{ p: { xs: 3, sm: 4 }, pl: { xs: 4, sm: 5 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box sx={{ bgcolor: 'rgba(17, 34, 78, 0.05)', p: 1, borderRadius: '10px', display: 'flex' }}>
                      <VisibilityIcon sx={{ color: colors.azul, fontSize: 28 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: colors.azul }}>
                      Nuestra Visión
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '1rem' }}>
                    Consolidarnos como el centro de idiomas referente, donde cada alumno descubra en Ling Up una formación que impulse su evolución. Ser la primera elección para quienes buscan expresarse con naturalidad en su entorno.
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