import { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, IconButton, 
  Box, Drawer, List, ListItem, ListItemButton, ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes Somos', path: '/quienes-somos' },
  { label: 'Idiomas', path: '/idiomas' },
  { label: 'Contactos', path: '/contactos' }
];

const colors = {
  azul: '#11224E', 
  aqua: '#00BFA5', 
  blanco: '#FFFFFF'
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: colors.blanco, height: '100%' }}>
      <Typography variant="h5" sx={{ my: 3, fontWeight: 'bold', color: colors.azul }}>
        Ling <span style={{color: colors.aqua}}>Up</span>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} sx={{ textAlign: 'center', color: colors.azul }}>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Botones móviles */}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemButton sx={{ textAlign: 'center', color: colors.azul, justifyContent: 'center' }}>
            <Typography fontWeight="bold">Iniciar Sesión</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <Box sx={{ width: '100%', px: 2, mt: 1 }}>
            <Button fullWidth variant="contained" sx={{ bgcolor: colors.aqua, '&:hover': { bgcolor: '#009688' } }}>
              Registro
            </Button>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="sticky" sx={{ bgcolor: colors.azul, boxShadow: 'none', borderBottom: `2px solid ${colors.aqua}` }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: colors.blanco }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              textDecoration: 'none',
              color: colors.blanco,
              fontWeight: 800
            }}
          >
            Ling <span style={{ color: colors.aqua }}>Up</span>
          </Typography>

          {/* Menú Desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button 
                key={item.label} 
                component={RouterLink} 
                to={item.path}
                sx={{ 
                  color: colors.blanco, 
                  mx: 1, 
                  fontWeight: 500,
                  '&:hover': { color: colors.aqua, backgroundColor: 'transparent' }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Botones de Acción Desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button 
              sx={{ 
                color: colors.blanco, 
                textTransform: 'none', 
                fontWeight: 'bold',
                '&:hover': { color: colors.aqua }
              }}
            >
              Iniciar Sesión
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: colors.aqua, 
                color: colors.blanco,
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '20px',
                px: 3,
                '&:hover': { bgcolor: '#009688' }
              }}
            >
              Registro
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menú Lateral para Móviles */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;