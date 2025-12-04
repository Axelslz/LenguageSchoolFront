import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          
          {/* Columna Texto */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
              Sobre Nuestra Escuela
            </Typography>
            <Typography paragraph color="text.secondary">
              Fundada con la pasión de conectar culturas, nuestra escuela se ha convertido en un centro de excelencia lingüística. No solo enseñamos gramática; enseñamos a comunicarse.
            </Typography>
            <Typography paragraph color="text.secondary">
              Contamos con profesores nativos y certificados que utilizan métodos modernos e interactivos para asegurar que aprendas de manera efectiva y divertida.
            </Typography>
            
            {/* Stats (Contadores) */}
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              {[
                { number: '10+', label: 'Años exp.' },
                { number: '6', label: 'Idiomas' },
                { number: '500+', label: 'Graduados' }
              ].map((stat, i) => (
                <Paper key={i} elevation={3} sx={{ p: 2, textAlign: 'center', flex: 1, bgcolor: 'primary.main', color: 'white' }}>
                  <Typography variant="h5" fontWeight="bold">{stat.number}</Typography>
                  <Typography variant="caption">{stat.label}</Typography>
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* Columna Imagen */}
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b955?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Estudiantes felices"
              sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: 4
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;