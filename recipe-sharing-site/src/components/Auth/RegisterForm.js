import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(''); // [cite: 16]
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(username, email, password, profilePicture)) {
      onRegisterSuccess(); // Callback để chuyển tab sau khi đăng ký thành công
    }
  };

  // [cite: 20]
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto' };
  const inputStyle = { padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' };
  const buttonStyle = { padding: '0.75rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required style={inputStyle} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
      <input type="password" placeholder="Password (min 8 characters)" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="8" style={inputStyle} />
      <input type="url" placeholder="Profile Picture URL (optional)" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} style={inputStyle} />
      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

export default RegisterForm;