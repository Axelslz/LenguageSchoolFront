import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const colors = {
  azul: '#11224E',
  aqua: '#00BFA5',
  blanco: '#FFFFFF',
  fondoGris: '#F8F9FA'
};

const idiomasData = [
  {
    id: 1,
    nombre: 'Inglés Profesional',
    descripcion: 'Enfocado en negocios y comunicación internacional. Niveles desde básico hasta avanzado (C1).',
    detalles: 'Clases dinámicas, preparación para certificaciones y club de conversación incluido.',
    imagen: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 2,
    nombre: 'Francés Académico',
    descripcion: 'Domina la lengua de la diplomacia. Ideal para estudiantes de intercambio y apasionados de la cultura.',
    detalles: 'Enfoque en gramática y fonética precisa con profesores certificados.',
    imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 3,
    nombre: 'Alemán de Rendimiento',
    descripcion: 'Abre puertas laborales en Europa. Cursos intensivos diseñados para el dominio técnico.',
    detalles: 'Metodología estructurada para un aprendizaje rápido y sólido.',
    imagen: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 4,
    nombre: 'Italiano Cultural',
    descripcion: 'Explora la riqueza del italiano. Desde cero hasta la fluidez comunicativa en entornos reales.',
    detalles: 'Sumergete en la cultura, gastronomía y arte mientras aprendes.',
    imagen: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=500'
  }
];

// Componente individual de la tarjeta giratoria (Sin el wrapper del Grid)
const FlipCard = ({ idioma }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped(!flipped)}
      sx={{
        perspective: '1000px',
        cursor: 'pointer',
        height: '400px',
        '&:hover': { transform: 'scale(1.02)' },
        transition: 'transform 0.3s ease'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* CARA FRONTAL */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '16px',
            overflow: 'hidden',
            borderBottom: `6px solid ${colors.aqua}`,
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
          }}
        >
          <Box
            sx={{
              height: '70%',
              backgroundImage: `url(${idioma.imagen})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: colors.blanco }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.azul, textAlign: 'center' }}>
              {idioma.nombre}
            </Typography>
          </CardContent>
        </Card>

        {/* CARA TRASERA */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '16px',
            bgcolor: colors.azul,
            color: colors.blanco,
            p: 3,
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
          }}
        >
          <Typography variant="h6" sx={{ color: colors.aqua, fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
            Información del Curso
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 2, lineHeight: 1.6 }}>
            {idioma.descripcion}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 4, fontStyle: 'italic', color: '#BDC3C7' }}>
            {idioma.detalles}
          </Typography>
          
          <Stack spacing={2}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<WhatsAppIcon />}
              sx={{
                bgcolor: colors.aqua,
                borderRadius: '25px',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#009688' }
              }}
              onClick={(e) => {
                e.stopPropagation(); // Evita que la carta se voltee al dar clic al botón
                window.open('https://wa.me/1234567890', '_blank');
              }}
            >
              Más información
            </Button>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

const Idiomas = () => {
  return (
    <Box sx={{ bgcolor: colors.fondoGris, minHeight: 'calc(100vh - 80px)', py: 6 }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: colors.azul, mb: 1 }}>
            Nuestros <span style={{ color: colors.aqua }}>Idiomas</span>
          </Typography>
          <Box sx={{ width: '100px', height: '4px', bgcolor: colors.aqua, mx: 'auto', borderRadius: '2px', mb: 3 }} />
          <Typography variant="body1" sx={{ color: '#555', maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
            Elige el idioma que impulsará tu carrera. Haz clic en cada tarjeta para conocer los detalles de nuestros cursos profesionales.
          </Typography>
        </Box>

        {/* Nuevo Contenedor Grid que soluciona los errores */}
        <Box 
          sx={{ 
            display: 'grid', 
            // 1 columna en móvil, 2 en tablet, 4 en escritorio
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: 4 
          }}
        >
          {idiomasData.map((idioma) => (
            <FlipCard key={idioma.id} idioma={idioma} />
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8, p: 3, bgcolor: 'rgba(17, 34, 78, 0.05)', borderRadius: '12px' }}>
          <Typography variant="body1" sx={{ color: colors.azul, fontWeight: 500 }}>
            ¿No encuentras el idioma que buscas? Contáctanos y te ayudamos con un plan a tu medida.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Idiomas;