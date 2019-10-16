import React, { useState } from 'react';

import './App.css';
import Form from './components/Form'
import List from './components/List'
function App() {
  const [team, setTeam] = useState([
    {
      name: 'john',
      email: 'mynameisntjohn@gmail.com',
      job: 'todothings',
    }
])
const addNewMember = teamMember => {
  setTeam([...team, teamMember])
}

  return (
    <div className="App">
      <Form  addNewMember = {addNewMember}/>
      <List memberList = {team} />
    </div>
  );
}

export default App;
