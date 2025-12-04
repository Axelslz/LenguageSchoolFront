import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactSection = () => {
  return (
    <Box sx={{ bgcolor: '#1a237e', color: 'white', py: 10 }} id="contacto">
      <Container>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
          Contáctanos
        </Typography>
        
        <Grid container spacing={8}>
          {/* Formulario */}
          <Grid item xs={12} md={6}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField 
                variant="filled" 
                label="Nombre" 
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }} 
                InputLabelProps={{ style: { color: '#ccc' } }}
                inputProps={{ style: { color: 'white' } }}
              />
              <TextField 
                variant="filled" 
                label="Email" 
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                InputLabelProps={{ style: { color: '#ccc' } }}
                inputProps={{ style: { color: 'white' } }}
              />
              <TextField 
                variant="filled" 
                label="Mensaje" 
                multiline 
                rows={4} 
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                InputLabelProps={{ style: { color: '#ccc' } }}
                inputProps={{ style: { color: 'white' } }}
              />
              <Button variant="contained" color="secondary" size="large">
                Enviar Mensaje
              </Button>
            </Box>
          </Grid>

          {/* Información de Contacto */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'rgba(0,0,0,0.2)', p: 4, borderRadius: 2, height: '100%' }}>
              <Typography variant="h5" gutterBottom>Información</Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 4 }}>
                <LocationOnIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 30 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Ubicación</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>Av. Principal 123, Centro</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 30 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>info@escuelaidiomas.com</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 30 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Teléfono</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>+52 55 1234 5678</Typography>
                </Box>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;