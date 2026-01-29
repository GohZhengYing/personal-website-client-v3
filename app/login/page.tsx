'use client';

import { Container, Button, TextField, Box } from '@mui/material';
import NavigationLayout from '../_layouts/NavigationLayout';
import { useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useLogin } from '../_hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    try {

      const res = await useLogin(email, password);

      localStorage.setItem('token', res.data.accessToken);

      console.log('Logged in successfully');
      router.push('/edit')
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NavigationLayout>
      <Container sx={{ height: '100%', width: '100%' }}>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          maxWidth={400}
          margin="auto"
          paddingTop={10}
        >
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
      </Container>
    </NavigationLayout>
  );
}
