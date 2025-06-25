import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#f8f9fa', borderBottom: '1px solid #dee2e6' };
  const navStyle = { display: 'flex', gap: '1rem', alignItems: 'center' };
  const linkStyle = { textDecoration: 'none', color: '#007bff' };
  const userInfoStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
  const profileImgStyle = { width: '40px', height: '40px', borderRadius: '50%' }; // [cite: 20]

  return (
    <header style={headerStyle}>
      <Link to="/" style={{...linkStyle, fontSize: '1.5rem', fontWeight: 'bold' }}>RecipeShare</Link>
      <nav style={navStyle}>
        {currentUser ? (
          <div style={userInfoStyle}>
            {/* Hiển thị lời chào và ảnh đại diện [cite: 18] */}
            <span>Welcome, {currentUser.username}!</span>
            <img src={currentUser.profilePicture} alt={currentUser.username} style={profileImgStyle} />
            <Link to="/profile" style={linkStyle}>Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" style={linkStyle}>Login / Register</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;