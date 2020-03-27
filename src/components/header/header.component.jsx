// Core
import React from 'react';

// Components
import { Logo } from '../logo/logo.component';

// Other
import './header.styles.css';

export const Header = () => (
  <header className='header'>
    <div className='headerContent'>
      <div className='headerShapePrimary' />
      <div className='headerShapeSecondary' />
      <div className='headerShapeTertiary' />
      <Logo/>
      <h1 className='headerTitle'>The Cat Gallery</h1>
    </div>
  </header>
);
