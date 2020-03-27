// Core
import React from 'react';

// Component
import { Card } from '../card/card.component';

// Other
import './cardList.styles.css';

export const CardList = ({ users }) => (
  <div className='cardList'>
    {users && users.map(user => <Card key={user.id} user={user} />)}
  </div>
);
