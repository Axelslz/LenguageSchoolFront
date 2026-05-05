import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';

const colors = {
  azul: '#11224E',
  aqua: '#00BFA5',
  blanco: '#FFFFFF',
  fondoGris: '#F8F9FA'
};

const QuienesSomos = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: colors.fondoGris, 
        // minHeight permite que abarque la pantalla sin cortar tu contenido
        minHeight: 'calc(100vh - 80px)', 
        display: 'flex',
        alignItems: 'center',
        py: 4 // Un poco de espacio arriba y abajo para que nada pegue con los bordes
      }}
    >
      {/* Usamos maxWidth="xl" para dar más espacio horizontal y asegurar que quepa lado a lado */}
      <Container maxWidth="xl"> 
        <Grid container spacing={6} alignItems="center">
          
          {/* LADO IZQUIERDO: TEXTO (Cuadro verde de tu boceto) */}
          <Grid item xs={12} md={7}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ fontWeight: 800, color: colors.azul, mb: 1 }}
              >
                Quiénes <span style={{ color: colors.aqua }}>Somos</span>
              </Typography>
              
              <Box sx={{ width: '80px', height: '4px', bgcolor: colors.aqua, mb: 4, borderRadius: '2px' }} />
              
              <Typography 
                variant="body1" 
                sx={{ color: '#444', textAlign: 'justify', mb: 3, fontSize: '1.05rem', lineHeight: 1.8 }}
              >
                <strong>Bienvenido a Ling Up</strong>, el espacio donde tu voz encuentra un nuevo idioma, transformamos el aprendizaje de idiomas en una herramienta de alto rendimiento. Somos un centro de idiomas diseñado para cerrar la brecha entre la teoría y el dominio profesional. Nacimos con la misión de acompañar a estudiantes universitarios y apasionados de las lenguas extranjeras en su camino hacia la fluidez.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ color: '#444', textAlign: 'justify', fontSize: '1.05rem', lineHeight: 1.8 }}
              >
                En Ling Up, creamos experiencias de aprendizaje profesionales de acuerdo a tus necesidades de tiempo, espacio y rendimiento, que te permiten conectar con el mundo real. Ya sea que busques apoyo para tu carrera de lenguas extranjeras, continuar avanzando con tu aprendizaje o quieras empezar desde cero, aquí encontrarás el impulso para llegar más lejos.
              </Typography>
            </Box>
          </Grid>

          {/* LADO DERECHO: MISIÓN Y VISIÓN (Cuadros amarillos de tu boceto) */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              
              {/* Tarjeta Misión */}
              <Card sx={{ 
                borderRadius: '12px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
                borderLeft: `8px solid ${colors.aqua}` 
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.azul, mb: 2 }}>
                    Misión
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', textAlign: 'justify', lineHeight: 1.7 }}>
                    Facilitar el dominio de lenguas extranjeras a través de un acompañamiento humano y profesional, brindando a estudiantes universitarios y al público en general las herramientas necesarias para conectar con el mundo, potenciar su perfil profesional y descubrir nuevas perspectivas culturales en un entorno de confianza.
                  </Typography>
                </CardContent>
              </Card>

              {/* Tarjeta Visión */}
              <Card sx={{ 
                borderRadius: '12px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
                borderLeft: `8px solid ${colors.azul}` 
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.azul, mb: 2 }}>
                    Visión
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', textAlign: 'justify', lineHeight: 1.7 }}>
                    Consolidarnos como el centro de idiomas referente, donde cada alumno descubra en Ling Up una formación que impulse su evolución. Siendo la primera elección para quienes buscan expresarse con naturalidad y confianza en todos los ámbitos de su entorno.
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