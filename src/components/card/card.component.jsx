// Core
import React from 'react';

// Other
import './card.styles.css';

export const Card = ({ user }) => (
  <div className='card'>
    <img
      src={`https://robohash.org/${user.id}?set=set4&size=180x180`}
      className='cardImage'
      alt={user.name}
    />
    <p className='cardInfo'>Name:</p>
    <p className='cardTitle'>{user.name}</p>

    <p className='cardInfo'>Email:</p>
    <p className='cardTitle'>{user.email}</p>

    <p className='cardInfo'>Phone:</p>
    <p className='cardTitle'>{user.phone}</p>

    <p className='cardInfo'>Website:</p>
    <p className='cardTitle'>{user.website}</p>
  </div>
);
