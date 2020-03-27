// Core
import React from 'react';

// Other
import './footer.styles.css';

export const Footer = () => (
  <footer className='footer'>
    <div className='footerContent'>
      <p className='footerCopyright'>Copyright © {new Date().getFullYear()} by Mr. Hapon</p>
    </div>
  </footer>
);
