import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import axios from  '../config/axios'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = () => {
    let user = { username, password }

    axios.post("/auth", user)
        .then(res => {
            if(res.status === 200){
                localStorage.setItem("token", res.data.token)
                console.log("Token almacenado en localStorage:", res.data.token);
                navigate('/Home')
            }
        })
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Paper
        sx={{
          padding: 3,
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          Iniciar sesión
        </Typography>
        <TextField
          label="Usuario"
          fullWidth
          margin="normal"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Contraseña"
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Iniciar sesión
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginForm;
