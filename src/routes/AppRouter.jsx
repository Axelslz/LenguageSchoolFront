import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// IMPORTAMOS LA PÁGINA REAL QUE CREAMOS
import Home from '../pages/Home';

// Componente temporal para Registro (lo haremos después)
import { Typography, Container } from '@mui/material';
const Register = () => <Container><Typography variant="h4" sx={{mt:4}}>Página de Registro (Próximamente)</Typography></Container>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Ahora el index apunta a nuestro componente Home real */}
          <Route index element={<Home />} />
          
          <Route path="registro" element={<Register />} />
          
          {/* Si ponen una ruta rara, redirigir al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};