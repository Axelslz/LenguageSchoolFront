import { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Button, IconButton, 
  Box, Drawer, List, ListItem, ListItemButton, ListItemText, Container 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const LOGO_URL = 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778108688/LOGO_SUPERIOR_V2_w5yige.png'; 

// Aquí agregamos las nuevas pestañas
const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes Somos', path: '/quienes-somos' },
  { label: 'Idiomas', path: '/idiomas' },
  { label: 'Instituciones', path: '/instituciones' },
  { label: 'Empresas', path: '/empresas' },
  { label: 'Contactos', path: '/contactos' }
];

const colors = {
  azul: '#11224E', 
  aqua: '#00BFA5', 
  blanco: '#FFFFFF', 
  grisFondo: '#F8F9FA'
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 

  // Detecta el scroll para encoger el navbar y agregar sombra dinámicamente
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ bgcolor: colors.blanco, height: '100%', pt: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Box 
          component="img" 
          src={LOGO_URL} 
          alt="Ling Up Logo" 
          sx={{ height: 50, objectFit: 'contain' }} 
        />
      </Box>
      <List sx={{ px: 2 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton 
                component={RouterLink} 
                to={item.path} 
                sx={{ 
                  textAlign: 'center', 
                  color: isActive ? colors.blanco : colors.azul,
                  bgcolor: isActive ? colors.aqua : 'transparent',
                  borderRadius: '12px', // Bordes redondeados para un look más moderno
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: isActive ? colors.aqua : 'rgba(0, 191, 165, 0.1)',
                    transform: 'translateX(5px)' // Pequeño salto a la derecha al hacer hover
                  }
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: isActive ? 800 : 600 }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" // Fijado para que acompañe el scroll
        elevation={scrolled ? 4 : 0} 
        sx={{ 
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)', 
          backdropFilter: 'blur(12px)', 
          boxShadow: scrolled ? '0px 10px 30px rgba(17, 34, 78, 0.08)' : 'none',
          borderBottom: scrolled ? 'none' : '1px solid rgba(17, 34, 78, 0.05)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {/* Contenedor para alinear con el resto del sitio */}
        <Container maxWidth="lg"> 
          <Toolbar sx={{ py: scrolled ? 0.5 : 1.5, transition: 'padding 0.3s ease', px: { xs: 0 } }}>
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: colors.azul }} 
            >
              <MenuIcon />
            </IconButton>
            
            <Box 
              component={RouterLink} 
              to="/" 
              sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Box 
                component="img" 
                src={LOGO_URL} 
                alt="Ling Up Logo" 
                sx={{ 
                  height: { xs: 40, sm: 48 }, 
                  objectFit: 'contain',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.03)' } 
                }} 
              />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button 
                    key={item.label} 
                    component={RouterLink} 
                    to={item.path}
                    disableRipple
                    sx={{ 
                      color: isActive ? colors.aqua : colors.azul, 
                      fontWeight: isActive ? 800 : 600,
                      textTransform: 'none', 
                      fontSize: '1rem',
                      position: 'relative',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      backgroundColor: 'transparent',
                      transition: 'all 0.2s ease',
                      '&::after': { 
                        content: '""',
                        position: 'absolute',
                        width: isActive ? '20px' : '0%', // Animación más sutil y elegante
                        height: '3px',
                        bottom: '4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bgcolor: colors.aqua,
                        transition: 'width 0.3s ease-in-out',
                        borderRadius: '2px',
                      },
                      '&:hover': { 
                        color: colors.aqua, 
                        backgroundColor: 'rgba(0, 191, 165, 0.05)',
                      },
                      '&:hover::after': {
                        width: '20px' 
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            borderTopRightRadius: '16px', // Detalle premium para el menú móvil
            borderBottomRightRadius: '16px'
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;