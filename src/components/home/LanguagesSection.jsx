import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

// Datos simulados (luego los moveremos a un archivo aparte)
const languages = [
  { name: 'Inglés', level: 'A1 - C2', desc: 'Domina el idioma universal de los negocios.' },
  { name: 'Francés', level: 'A1 - B2', desc: 'El idioma del amor y la diplomacia.' },
  { name: 'Alemán', level: 'A1 - B2', desc: 'Impulsa tu carrera en ingeniería y ciencia.' },
  { name: 'Italiano', level: 'A1 - B2', desc: 'Conecta con la cultura, arte y gastronomía.' },
  { name: 'Japonés', level: 'N5 - N3', desc: 'Descubre una cultura milenaria fascinante.' },
  { name: 'Portugués', level: 'A1 - B2', desc: 'Abre puertas en Brasil y Portugal.' },
];

const LanguagesSection = () => {
  return (
    <Box id="idiomas" sx={{ py: 8, bgcolor: '#f9f9f9' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Nuestros Idiomas
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Descubre nuestra selección de cursos diseñados para llevarte desde principiante hasta experto.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {languages.map((lang, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } // Efecto hover del ejemplo
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.dark">
                      <LanguageIcon sx={{ mr: 1, verticalAlign: 'middle' }}/>
                      {lang.name}
                    </Typography>
                    <Chip label={lang.level} color="warning" size="small" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {lang.desc}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'primary.main', fontWeight: 'bold' }}>
                    VER DETALLES &rarr;
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LanguagesSection;