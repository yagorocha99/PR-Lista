import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-3 mt-4 fixed-bottom w-100">
      <div className="container">
        <p>Desenvolvido por Seu Nome - {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
