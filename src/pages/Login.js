import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../redux/AuthSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const { loading, error } = useSelector(state => state.auth);

  useEffect(() => {// limpia el error al montar el componente
    dispatch(clearError());
  }, [dispatch]);


  useEffect(() => {
    setEmailError('');
  }, [email]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Box sx={{p:'10px', border:'1px solid rgb(190, 190, 190)', borderRadius:'20px', display:'flex', flexDirection:'column', alignItems:'center', mt:'10em'}}>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoFocus
          error={emailError}
          helperText={emailError}
          sx={{m:'1em'}}
          variant="standard"
        />
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          sx={{m:'1em'}}
          variant="standard"
       />
        <Button onClick={handleLogin} disabled={loading} sx={{m:'1em'}}>
          {loading ? <CircularProgress size={24} /> : 'Iniciar sesión'}
        </Button>
      </Box>
      {error && <p>{error.message || error}</p>}
    </Box>
  );
};
export default Login;