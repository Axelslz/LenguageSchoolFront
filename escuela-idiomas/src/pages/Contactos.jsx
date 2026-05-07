import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container, TextField, Button, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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

const Contacto = () => {
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
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 900, 
              color: colors.blanco, 
              mb: 1,
              fontSize: { xs: '2.8rem', md: '4rem' },
              letterSpacing: '-1.5px',
              textShadow: '0px 4px 10px rgba(0,0,0,0.3)'
            }}
          >
            Ponte en <span style={{ color: colors.aqua }}>Contacto</span>
          </Typography>
          <Box sx={{ width: '100px', height: '6px', bgcolor: colors.aqua, mx: 'auto', borderRadius: '4px', mb: 3 }} />
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: '700px', mx: 'auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
            Estamos aquí para ayudarte a dar el siguiente paso. Escríbenos, llámanos o visítanos; nuestro equipo está listo para resolver todas tus dudas.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="stretch">
          
          <Grid item xs={12} md={5}>
            <Card 
              elevation={10}
              sx={{ 
                height: '100%',
                borderRadius: '24px', 
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                opacity: 0,
                animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards`,
              }}
            >
              <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '8px', bgcolor: colors.azul }} />
              <CardContent sx={{ p: { xs: 4, sm: 5 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
                
                <Typography variant="h5" sx={{ fontWeight: 800, color: colors.azul, mb: 4 }}>
                  Información de Contacto
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flexGrow: 1 }}>
                  
                  {/* Item: Dirección */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(17, 34, 78, 0.05)', p: 1.5, borderRadius: '12px', display: 'flex' }}>
                      <LocationOnIcon sx={{ color: colors.azul, fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.azul }}>Visítanos</Typography>
                      <Typography variant="body2" sx={{ color: '#475569', mt: 0.5, lineHeight: 1.6 }}>
                        Av. Principal #123, Col. Centro<br />Tuxtla Gutiérrez, Chiapas.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Item: Teléfono */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(17, 34, 78, 0.05)', p: 1.5, borderRadius: '12px', display: 'flex' }}>
                      <PhoneIcon sx={{ color: colors.azul, fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.azul }}>Llámanos</Typography>
                      <Typography variant="body2" sx={{ color: '#475569', mt: 0.5 }}>
                        +52 961 123 4567
                      </Typography>
                    </Box>
                  </Box>

                  {/* Item: Correo */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(17, 34, 78, 0.05)', p: 1.5, borderRadius: '12px', display: 'flex' }}>
                      <EmailIcon sx={{ color: colors.azul, fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.azul }}>Escríbenos</Typography>
                      <Typography variant="body2" sx={{ color: '#475569', mt: 0.5 }}>
                        contacto@lingup.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* Item: Horario */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(17, 34, 78, 0.05)', p: 1.5, borderRadius: '12px', display: 'flex' }}>
                      <AccessTimeIcon sx={{ color: colors.azul, fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.azul }}>Horario de Atención</Typography>
                      <Typography variant="body2" sx={{ color: '#475569', mt: 0.5 }}>
                        Lunes a Viernes: 8:00 AM - 8:00 PM<br />Sábados: 9:00 AM - 2:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Redes Sociales */}
                <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #E2E8F0', display: 'flex', gap: 2 }}>
                  <IconButton sx={{ bgcolor: colors.azul, color: colors.blanco, '&:hover': { bgcolor: colors.aqua } }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton sx={{ bgcolor: colors.azul, color: colors.blanco, '&:hover': { bgcolor: colors.aqua } }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton sx={{ bgcolor: '#25D366', color: colors.blanco, '&:hover': { bgcolor: '#1EBE5D' } }}>
                    <WhatsAppIcon />
                  </IconButton>
                </Box>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card 
              elevation={10}
              sx={{ 
                height: '100%',
                borderRadius: '24px', 
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                opacity: 0,
                animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards`,
              }}
            >
              <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '8px', bgcolor: colors.aqua }} />
              <CardContent sx={{ p: { xs: 4, sm: 5 } }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: colors.azul, mb: 1 }}>
                  Envíanos un Mensaje
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', mb: 4 }}>
                  Completa el formulario y un asesor se pondrá en contacto contigo lo más pronto posible.
                </Typography>

                <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="Nombre Completo" 
                        variant="outlined" 
                        color="primary"
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="Teléfono / Celular" 
                        variant="outlined" 
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                      />
                    </Grid>
                  </Grid>

                  <TextField 
                    fullWidth 
                    label="Correo Electrónico" 
                    type="email"
                    variant="outlined" 
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                  />

                  <TextField 
                    fullWidth 
                    label="¿En qué idioma o curso estás interesado?" 
                    variant="outlined" 
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                  />

                  <TextField 
                    fullWidth 
                    label="Mensaje o dudas adicionales" 
                    multiline
                    rows={4}
                    variant="outlined" 
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                  />

                  <Button 
                    variant="contained" 
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ 
                      mt: 2,
                      bgcolor: colors.aqua, 
                      color: colors.blanco,
                      borderRadius: '30px',
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 20px rgba(0, 191, 165, 0.3)',
                      '&:hover': { 
                        bgcolor: '#009688', 
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(0, 191, 165, 0.4)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Contacto;