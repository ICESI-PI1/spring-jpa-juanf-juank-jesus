import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar(props) {
  const navigate = useNavigate();
  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Libros', path: '/books' },
    { name: 'Autores', path: '/authors' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Biblioteca
          </Typography>
          {navItems.map((item) => (
            <Button key={item.name} component={Link} to={item.path} sx={{ color: '#fff' }}>
              {item.name}
            </Button>
          ))}
          <Button onClick={handleLogout} sx={{ color: '#fff' }}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* Aquí va el contenido principal */}
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;