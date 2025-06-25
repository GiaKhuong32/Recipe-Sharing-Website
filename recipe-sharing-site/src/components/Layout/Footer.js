import React from 'react';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '1rem 2rem',
    marginTop: 'auto', // Đẩy footer xuống cuối trang
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #dee2e6',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Recipe Sharing Website. Project by [Your Team Name].</p>
    </footer>
  );
};

export default Footer;