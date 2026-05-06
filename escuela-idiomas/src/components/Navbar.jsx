import { useState } from 'react';
import { 
  AppBar, Toolbar, Button, IconButton, 
  Box, Drawer, List, ListItem, ListItemButton, ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const LOGO_URL = 'https://res.cloudinary.com/dqozuofy6/image/upload/v1778108688/LOGO_SUPERIOR_V2_w5yige.png'; 

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes Somos', path: '/quienes-somos' },
  { label: 'Idiomas', path: '/idiomas' },
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
  const location = useLocation(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: colors.blanco, height: '100%' }}>

      <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
        <Box 
          component="img" 
          src={LOGO_URL} 
          alt="Ling Up Logo" 
          sx={{ height: 50, objectFit: 'contain' }} 
        />
      </Box>
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                component={RouterLink} 
                to={item.path} 
                sx={{ 
                  textAlign: 'center', 
                  color: isActive ? colors.aqua : colors.azul,
                  bgcolor: isActive ? 'rgba(0, 191, 165, 0.1)' : 'transparent',
                  borderLeft: isActive ? `4px solid ${colors.aqua}` : '4px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: isActive ? 800 : 500 }} />
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
        position="sticky" 
        sx={{ 
          bgcolor: 'rgba(255, 255, 255, 0.9)', 
          backdropFilter: 'blur(10px)', 
          boxShadow: '0px 4px 20px rgba(0,0,0,0.06)', 
        }}
      >
        <Toolbar sx={{ py: 0.5 }}>
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
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box 
              component="img" 
              src={LOGO_URL} 
              alt="Ling Up Logo" 
              sx={{ 
                height: 45, 
                objectFit: 'contain',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' } 
              }} 
            />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', pr: 2 }}>
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
                    mx: 1.5, 
                    fontWeight: 700,
                    textTransform: 'none', 
                    fontSize: '1rem',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    '&::after': { 
                      content: '""',
                      position: 'absolute',
                      width: isActive ? '100%' : '0%',
                      height: '3px',
                      bottom: '4px',
                      left: '0',
                      bgcolor: colors.aqua,
                      transition: 'width 0.3s ease-in-out',
                      borderRadius: '2px',
                    },
                    '&:hover': { 
                      color: colors.aqua, 
                      backgroundColor: 'transparent',
                    },
                    '&:hover::after': {
                      width: '100%' 
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;


// https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/china_gwtm5f.png
// https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/japones_xsyx0z.png
// https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/bellas_artes_ff2rkr.png
// https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/ingles_yojym2.png
// https://res.cloudinary.com/dqozuofy6/image/upload/v1778109244/aleman_sxslts.png
// https://res.cloudinary.com/dqozuofy6/image/upload/v1778109243/frances_mxapi6.png