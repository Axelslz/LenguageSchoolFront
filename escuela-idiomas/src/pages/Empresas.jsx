import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/system';

// Animaciones suaves
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const colores = {
  azul: '#11224E',
  aqua: '#00BFA5',
  fondo: '#F8F9FA',
  texto: '#4A5568'
};

// Datos de los sectores
const sectores = [
  {
    titulo: 'Sector Turístico y Hospitalidad',
    descripcion: 'Eleve la experiencia del cliente a un nivel de excelencia, superando las expectativas culturales y garantizando la lealtad de un mercado global.',
    imagen: 'https://res.cloudinary.com/dvjjpeyzh/image/upload/v1780361523/Lingup/sector_hotelera_d2uegs.png' 
  },
  {
    titulo: 'Sector Industrial y Manufacturero',
    descripcion: 'Optimice la cadena de suministro, minimice errores de interpretación en manuales y logre una coordinación impecable con matrices extranjeras.',
    imagen: 'https://res.cloudinary.com/dvjjpeyzh/image/upload/v1780361522/Lingup/sector_industrial_buszmz.png'
  },
  {
    titulo: 'Sector Educativo',
    descripcion: 'Proyecte su institución hacia la internacionalización, capacitando a su cuerpo docente para liderar programas de vanguardia y convenios globales.',
    imagen: 'https://res.cloudinary.com/dvjjpeyzh/image/upload/v1780361466/Lingup/sector_educativo_b2gqkl.jpg'
  }
];

const Empresas = () => {
  return (
    <Box sx={{ bgcolor: colores.fondo, minHeight: '100vh', pb: 10 }}>
      
      <Box 
  sx={{
    position: 'relative',
    // Imagen de una reunión corporativa formal y elegante
    backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Centrado estándar para imágenes corporativas
    minHeight: { xs: '45vh', md: '55vh' }, 
    mt: { xs: 8, md: 11 }, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    pt: { xs: 4, sm: 6 },
    pb: { xs: 6, sm: 8 },
    mb: 10,
    overflow: 'hidden',
    borderRadius: { xs: 0, lg: '0 0 24px 24px' } 
  }}
>
        <Box 
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to bottom, rgba(17, 34, 78, 0.85) 0%, rgba(17, 34, 78, 0.7) 100%)',
            zIndex: 1
          }} 
        />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, animation: `${fadeInUp} 0.8s ease-out` }}>
          
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ color: '#ffffff', fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1 }}
          >
            Impulse el Potencial Global de su Empresa
          </Typography>
          
        </Container>
      </Box>

      <Container maxWidth="lg">

        <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', mb: 12, animation: `${fadeInUp} 0.8s ease-out 0.2s backwards` }}>
          <Typography variant="body1" sx={{ color: colores.texto, fontSize: '1.2rem', lineHeight: 1.8, mb: 3 }}>
            En el entorno empresarial de hoy, la competitividad ya no solo se mide en infraestructura o tecnología; se mide en la capacidad de su organización para conectar con el mundo.
          </Typography>
          <Typography variant="body1" sx={{ color: colores.texto, fontSize: '1.2rem', lineHeight: 1.8, mb: 3 }}>
            Piense por un momento en el talento de su equipo: <strong style={{ color: colores.azul }}>¿cuánto más podrían lograr si las barreras del idioma no existieran?</strong>
          </Typography>
          <Typography variant="body1" sx={{ color: colores.texto, fontSize: '1.2rem', lineHeight: 1.8, mb: 3 }}>
            Cuando sus colaboradores dominan una segunda lengua, no solo adquieren una habilidad técnica; abren la puerta a negociaciones más fluidas, cierres de contratos internacionales y alianzas estratégicas que antes parecían inalcanzables.
          </Typography>
          <Typography variant="body1" sx={{ color: colores.texto, fontSize: '1.2rem', lineHeight: 1.8 }}>
            Una comunicación bilingüe o multilingüe efectiva es el puente que transforma una simple transacción en un <strong style={{ color: colores.aqua }}>vínculo comercial sólido, confiable y duradero</strong>.
          </Typography>
        </Box>

        <Box sx={{ mb: 12, animation: `${fadeInUp} 0.8s ease-out 0.4s backwards` }}>
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography variant="h3" sx={{ color: colores.azul, fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              El Idioma como la Mejor Inversión (ROI)
            </Typography>
            <Box sx={{ width: '80px', height: '4px', bgcolor: colores.aqua, mx: 'auto', borderRadius: '2px', mb: 4 }} />
            <Typography variant="body1" sx={{ color: colores.texto, fontSize: '1.1rem', maxWidth: '800px', mx: 'auto' }}>
              Hablar el idioma de sus clientes y socios no es un valor agregado; es una ventaja competitiva crítica que impacta directamente en los resultados financieros en sectores clave:
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {sectores.map((sector, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(17, 34, 78, 0.06)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    border: '1px solid rgba(0,0,0,0.03)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 45px rgba(0, 191, 165, 0.15)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={sector.imagen}
                    alt={sector.titulo}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 4, bgcolor: '#ffffff' }}>
                    <Typography variant="h6" sx={{ color: colores.azul, fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
                      {sector.titulo}
                    </Typography>
                    <Typography variant="body2" sx={{ color: colores.texto, lineHeight: 1.7, fontSize: '1.05rem' }}>
                      {sector.descripcion}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ animation: `${fadeInUp} 0.8s ease-out 0.6s backwards` }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 4, md: 8 }, 
              bgcolor: colores.azul, 
              color: '#ffffff',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(17, 34, 78, 0.2)',
              textAlign: 'center'
            }}
          >

            <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(0, 191, 165, 0.1)' }} />
            <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, borderRadius: '50%', bgcolor: 'rgba(0, 191, 165, 0.1)' }} />

            <Typography 
              variant="h5" 
              sx={{ fontStyle: 'italic', fontWeight: 400, mb: 4, lineHeight: 1.6, maxWidth: '900px', mx: 'auto', position: 'relative', zIndex: 2 }}
            >
              "El verdadero crecimiento comienza cuando su equipo habla el lenguaje de los negocios globales."
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#E2E8F0', fontSize: '1.1rem', mb: 4, maxWidth: '800px', mx: 'auto', lineHeight: 1.8, position: 'relative', zIndex: 2 }}>
              En nuestro centro de idiomas <strong style={{ color: colores.aqua }}>LingUp</strong>, desarrollamos las competencias lingüísticas que sus colaboradores necesitan para negociar, liderar y expandir los horizontes de su empresa.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 2 }}>
              Lleve a su organización al siguiente nivel. Diseñemos juntos su plan corporativo.
            </Typography>

          </Paper>
        </Box>

      </Container>
    </Box>
  );
};

export default Empresas;