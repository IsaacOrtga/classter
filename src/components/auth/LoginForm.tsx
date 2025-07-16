"use client";

import useAuth from '@/hooks/useAuth';
import { useState } from 'react';

const LoginForm = () => {
    const {signIn, loading, error} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        await signIn(email, password);    
    };

  return (
      <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Correo"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Entrar"}
      </button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </form>
  )
}

export default LoginForm
