import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// Un tema básico de MUI que luego podemos personalizar
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul clásico, puedes cambiarlo
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resetea los márgenes por defecto del navegador */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)