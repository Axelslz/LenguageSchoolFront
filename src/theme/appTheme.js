// src/theme/appTheme.js
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50', // Un azul oscuro/gris muy elegante (para el Navbar)
    },
    secondary: {
      main: '#d35400', // Un naranja terracota (similar al ámbar de la cafetería) para botones
    },
    background: {
      default: '#fdfbf7', // Fondo crema suave
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif', // Títulos elegantes
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // Quita las mayúsculas forzadas de los botones
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12, // Bordes más redondeados en toda la app (botones, tarjetas)
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30, // Botones estilo "píldora"
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // Sombra suave al pasar el mouse
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', // Sombra elegante para las tarjetas
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
             transform: 'translateY(-5px)', // Efecto de elevación al pasar el mouse
          },
        },
      },
    },
  },
});