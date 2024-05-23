import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} My Music App. All Rights Reserved.</p>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%'
};

export default Footer;