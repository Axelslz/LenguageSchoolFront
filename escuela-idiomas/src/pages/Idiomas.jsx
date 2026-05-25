import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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

// Actualización de datos con la nueva información, subtítulos, botones y enlaces
const idiomasData = [
  {
    id: 1,
    nombre: 'Francés',
    subtitulo: '¡Parlez-vous français? El idioma de la cultura, los negocios y tu próximo gran paso.',
    descripcion: 'En LingUp te enseñamos desde tus primeras palabras hasta lograr una comunicación natural y precisa. A través de nuestra plataforma completamente interactiva, desarrollarás habilidades sólidas para expresarte con fluidez, elegancia y exactitud en cualquier entorno. Domina el lenguaje de la diplomacia, el arte, y destaca profesionalmente con un programa diseñado para llevarte al éxito.',
    textoBoton: 'Inicia tu viaje hoy',
    link: 'https://wa.me/1234567890?text=Quiero%20inscribirme%20en%20Francés',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109243/frances_mxapi6.png'
  },
  {
    id: 2,
    nombre: 'Italiano',
    subtitulo: 'Habla, piensa y comunícate en italiano con total seguridad.',
    descripcion: 'En LingUp con nuestra plataforma completamente interactiva, desarrollarás las habilidades necesarias para dominar el italiano a un nivel avanzado y profesional. Vivirás un aprendizaje dinámico. ¡El control del idioma está a tu alcance!',
    textoBoton: 'Inicia tu camino hoy',
    link: 'https://wa.me/1234567890?text=Quiero%20inscribirme%20en%20Italiano',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/bellas_artes_ff2rkr.png' // Mantuvimos esta imagen temporalmente
  },
  {
    id: 3,
    nombre: 'Japonés',
    subtitulo: 'Iníciate en el Fascinante Mundo del Japonés.',
    descripcion: '¿Te fascina la cultura, el anime o la tecnología nipona? El japonés es mucho más que un idioma; es una puerta a una cultura milenaria. En LingUp, con nuestra introducción exclusiva al japonés, plataforma 100% interactiva. Aprende las bases, los primeros trazos y sonidos de un idioma fascinante que te abrirá un mundo de posibilidades. ¡Tu primer paso hacia el país del sol naciente comienza aquí!',
    textoBoton: 'Quiero conocer más',
    link: 'https://wa.me/1234567890?text=Quiero%20inscribirme%20en%20Japonés',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/japones_xsyx0z.png'
  },
  {
    id: 4,
    nombre: 'Inglés Americano',
    subtitulo: 'El lenguaje de las grandes oportunidades.',
    descripcion: '¿Te imaginas negociar con confianza, trabajar en cualquier lugar o disfrutar tus vacaciones como un local? Dominar el inglés a un nivel avanzado ya no es un extra, es tu ventaja competitiva. En LingUp, transformamos tu aprendizaje con una plataforma 100% interactiva diseñada para que domines el inglés americano de forma real, dinámica y profesional. No solo aprendas el idioma, úsalo para transformar tu vida y alcanza el dominio necesario para destacar en cualquier escenario global.',
    textoBoton: 'Domina el inglés hoy',
    link: 'https://wa.me/1234567890?text=Quiero%20inscribirme%20en%20Inglés',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/ingles_yojym2.png'
  },
  {
    id: 5,
    nombre: 'Chino',
    subtitulo: '你好! (Nǐ hǎo!) Conéctate con el mundo sin barreras.',
    descripcion: 'El mandarín es el idioma clave para los negocios del siglo XXI. En LingUp, te acompañamos desde tus primeros trazos hasta un dominio elemental sólido. Gracias a nuestra plataforma totalmente interactiva aprenderás de manera ágil y efectiva, para que domines los fundamentos con precisión.',
    textoBoton: 'Comienza tu formación',
    link: 'https://wa.me/1234567890?text=Quiero%20inscribirme%20en%20Chino',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/china_gwtm5f.png'
  },
  {
    id: 6,
    nombre: 'Alemán',
    subtitulo: 'Guten Tag! Entdecken Sie eine neue Welt',
    descripcion: 'Con nuestro curso introductorio te llevamos de la mano desde el inicio hasta un nivel intermedio, en dónde sucede la magia y se convierte en una herramienta real. En LingUp nuestra plataforma 100% interactiva facilita tu progreso, llevándote de los conceptos básicos a una comunicación sólida y real.',
    textoBoton: 'Inscríbete ahora',
    link: 'https://wa.me/1234567890?text=Quiero%20inscribirme%20en%20Alemán',
    imagen: 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/aleman_sxslts.png'
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
        height: '420px', 
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
            justifyContent: 'space-between',
            borderRadius: '16px',
            bgcolor: colors.blanco,
            border: `2px solid ${colors.aqua}`,
            p: 3,
            boxShadow: '0 10px 30px rgba(0, 191, 165, 0.2)',
          }}
        >
          {/* Contenedor de texto con scroll oculto para que no se desborde la info */}
          <Box 
            sx={{ 
              overflowY: 'auto', 
              flexGrow: 1, 
              mb: 2,
              pr: 1,
              '&::-webkit-scrollbar': { width: '4px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: 'rgba(0, 191, 165, 0.3)', borderRadius: '10px' },
            }}
          >
            <Typography variant="h6" sx={{ color: colors.azul, fontWeight: 800, mb: 1, textAlign: 'center' }}>
              {idioma.nombre}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', color: colors.aqua, fontWeight: 700, mb: 1.5, fontSize: '0.9rem', lineHeight: 1.3 }}>
              {idioma.subtitulo}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify', lineHeight: 1.6, color: '#4A5568', fontSize: '0.85rem' }}>
              {idioma.descripcion}
            </Typography>
          </Box>
          
          {/* Botón de Acción dinámico */}
          <Box sx={{ width: '100%', pt: 1, borderTop: '1px solid #edf2f7' }}>
            <Button
              fullWidth
              variant="contained"
              endIcon={<OpenInNewIcon fontSize="small" />}
              sx={{
                bgcolor: colors.azul,
                color: colors.blanco,
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '8px',
                py: 1,
                fontSize: '0.9rem',
                boxShadow: '0 4px 10px rgba(17, 34, 78, 0.2)',
                '&:hover': { 
                  bgcolor: '#0a1430',
                  transform: 'translateY(-2px)' 
                },
                transition: 'all 0.2s ease'
              }}
              onClick={(e) => {
                e.stopPropagation(); // Evita que la tarjeta gire al hacer clic en el botón
                window.open(idioma.link, '_blank'); // Redirige al link en nueva pestaña
              }}
            >
              {idioma.textoBoton}
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
      {/* Capa superpuesta ajustada como en Home */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%)',
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
              textShadow: '0px 4px 15px rgba(0,0,0,0.5)' // Sombra ajustada
            }}
          >
            Nuestros <span style={{ color: colors.aqua }}>Idiomas</span>
          </Typography>
          <Box sx={{ width: '100px', height: '5px', bgcolor: colors.aqua, mx: 'auto', borderRadius: '3px', mb: 3 }} />
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#F8FAFC', // Color ajustado para mejor contraste
              maxWidth: '700px', 
              mx: 'auto', 
              fontSize: '1.15rem', 
              lineHeight: 1.8,
              textShadow: '0px 2px 4px rgba(0,0,0,0.5)' // Sombra para legibilidad
            }}
          >
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
          <Typography 
            variant="h5" 
            sx={{ 
              color: colors.blanco, 
              fontWeight: 700, 
              mb: 2, 
              maxWidth: '800px',
              textShadow: '0px 2px 4px rgba(0,0,0,0.5)' // Sombra para legibilidad
            }}
          >
            ¿Quieres saber más información detallada?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#F8FAFC', // Color ajustado
              mb: 4, 
              maxWidth: '600px', 
              fontSize: '1.1rem',
              textShadow: '0px 2px 4px rgba(0,0,0,0.5)' // Sombra para legibilidad
            }}
          >
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