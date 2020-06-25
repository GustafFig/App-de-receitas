import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailPassword = () => (
    password.length > 6 && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/.test(email)
  );

  const storage = () => {
    localStorage.setItem('Email', email);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Email"
        data-tesid="email-input"
        onChange={(event) => setEmail(event.target.value)}
        type="email"
      />
      <input
        data-testid="password-input"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Senha"
        required
        type="password"
      />
      <Link to="./FoodsPage">
        <button
          type="button"
          disabled={!emailPassword()}
          data-testid="login-submit-btn"
          onClick={() => storage()}
        >
          Entrar
          </button>
      </Link>
    </div>
  );
}

export default LoginPage;
