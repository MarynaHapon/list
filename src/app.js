// Core
import React, { useEffect, useState } from 'react';

//Components
import { Header } from './components/header/header.component';
import { CardList } from './components/cardList/cardList.component';
import { Navbar } from './components/navbar/navbar.component';
import { SearchInput } from './components/searchInput/searchInput.component';
import { Footer } from './components/footer/footer.conponent'

// Other
import './app.css';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ filteredUsers, setFilteredUsers ] = useState([]);
  const [ searchField, setSearchField ] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => (response.status === 200) && response.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    setFilteredUsers(users)
  }, [ users ]);

  useEffect(() => {
    setFilteredUsers(users.filter(user => user.name
      .toLowerCase()
      .includes(searchField.toLowerCase())
    ));
  }, [ searchField ]);

  return (
    <div className='app'>
      <Header />
      <Navbar>
        <SearchInput
          placeholder='Search by Name'
          onChangeHandler={(e) => setSearchField(e.target.value)}
        />
      </Navbar>
      <CardList users={filteredUsers} />
      <Footer />
    </div>
  );
}

export default App;
