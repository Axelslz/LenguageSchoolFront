import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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

const idiomasData = [
  {
    id: 1,
    nombre: 'Español',
    descripcion: 'Perfecciona tu gramática, ortografía y redacción. Ideal para profesionales y extranjeros.',
    detalles: 'Inmersión cultural, modismos y español de negocios.',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/bellas_artes_ff2rkr.png' 
  },
  {
    id: 2,
    nombre: 'Inglés',
    descripcion: 'Enfocado en negocios y comunicación internacional. Niveles desde básico hasta avanzado.',
    detalles: 'Clases dinámicas, preparación para certificaciones y club de conversación.',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/ingles_yojym2.png'
  },
  {
    id: 3,
    nombre: 'Alemán',
    descripcion: 'Abre puertas laborales en Europa y la industria tecnológica. Cursos diseñados para el dominio técnico.',
    detalles: 'Metodología estructurada para un aprendizaje rápido y sólido.',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/aleman_sxslts.png'
  },
  {
    id: 4,
    nombre: 'Francés',
    descripcion: 'Domina la lengua de la diplomacia. Ideal para estudiantes de intercambio y apasionados del arte.',
    detalles: 'Enfoque en gramática y fonética precisa con profesores nativos.',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109243/frances_mxapi6.png'
  },
  {
    id: 5,
    nombre: 'Chino',
    descripcion: 'Conecta con el gigante asiático. Aprende mandarín desde las bases hasta la fluidez comercial.',
    detalles: 'Caligrafía, tonos y preparación para el examen HSK.',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/china_gwtm5f.png'
  },
  {
    id: 6,
    nombre: 'Japonés',
    descripcion: 'Sumérgete en la cultura nipona, desde el anime hasta la etiqueta de negocios formal.',
    detalles: 'Dominio de Hiragana, Katakana, Kanji y conversación fluida.',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/japones_xsyx0z.png'
  }
];

const FlipCard = ({ idioma, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped(!flipped)}
      sx={{
        perspective: '1000px',
        cursor: 'pointer',
        height: '400px',
        opacity: 0,
        animation: `${fadeInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + (index * 0.1)}s forwards`,
        '&:hover': { transform: 'scale(1.03)' },
        transition: 'transform 0.3s ease'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
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
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}
        >
          <Box
            sx={{
              height: '75%',
              backgroundImage: `url(${idioma.imagen})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: colors.blanco, p: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: colors.azul, textAlign: 'center', letterSpacing: '-0.5px' }}>
              {idioma.nombre}
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '16px',
            bgcolor: colors.blanco,
            border: `2px solid ${colors.aqua}`,
            p: 3,
            boxShadow: '0 10px 30px rgba(0, 191, 165, 0.2)'
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: colors.azul, fontWeight: 800, mb: 1.5, textAlign: 'center' }}>
              {idioma.nombre} Profesional
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', mb: 1.5, lineHeight: 1.5, color: '#4A5568' }}>
              {idioma.descripcion}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', fontStyle: 'italic', color: '#718096', fontWeight: 500, fontSize: '0.85rem' }}>
              {idioma.detalles}
            </Typography>
          </Box>
          
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: '#718096', mb: 0.5 }}>
              ¿Ya estás inscrito?
            </Typography>
            
            <Button
              fullWidth
              sx={{
                color: colors.azul,
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '20px',
                '&:hover': { backgroundColor: 'rgba(17, 34, 78, 0.05)' }
              }}
              onClick={(e) => {
                e.stopPropagation();
                console.log("Navegar a Iniciar Sesión");
              }}
            >
              Inicia Sesión
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

const Idiomas = () => {
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
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 10 } 
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            opacity: 0,
            animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards` 
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 900, 
              color: colors.blanco, 
              mb: 1,
              textShadow: '0px 4px 10px rgba(0,0,0,0.3)' 
            }}
          >
            Nuestros <span style={{ color: colors.aqua }}>Idiomas</span>
          </Typography>
          <Box sx={{ width: '100px', height: '5px', bgcolor: colors.aqua, mx: 'auto', borderRadius: '3px', mb: 3 }} />
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: '700px', mx: 'auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Elige el idioma que impulsará tu carrera. Haz clic en cada tarjeta para conocer los detalles de nuestros cursos profesionales.
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
            gap: { xs: 4, md: 5 } 
          }}
        >
          {idiomasData.map((idioma, index) => (
            <FlipCard key={idioma.id} idioma={idioma} index={index} />
          ))}
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center', 
            mt: 10, 
            p: { xs: 4, md: 6 }, 
            bgcolor: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            opacity: 0,
            animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards`
          }}
        >
          <Typography variant="h5" sx={{ color: colors.blanco, fontWeight: 700, mb: 2, maxWidth: '800px' }}>
            ¿Quieres saber más información detallada?
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', mb: 4, maxWidth: '600px', fontSize: '1.1rem' }}>
            Haz tu registro gratuito y nosotros nos comunicamos contigo vía WhatsApp para resolver todas tus dudas.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon sx={{ fontSize: '28px !important' }} />}
            sx={{
              bgcolor: '#25D366', 
              color: colors.blanco,
              borderRadius: '30px',
              px: { xs: 4, md: 6 },
              py: 1.5,
              textTransform: 'none',
              fontWeight: 800,
              fontSize: '1.1rem',
              boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)',
              '&:hover': { 
                bgcolor: '#1EBE5D', 
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
              },
              transition: 'all 0.3s ease'
            }}
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            Contáctanos por WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Idiomas;