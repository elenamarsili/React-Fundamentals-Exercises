import {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Players from './Players';
import Form from './Form';

const App = () => {
  const [players, setPlayers] = useState([
    {
      first_name: "Maria",
      last_name: "Rodriguez",
      username: "marodri",
      games_played: 2,
    },
    {
      first_name: "Jack",
      last_name: "Black",
      username: "blackjack",
      games_played: 20,
    },
    {
      first_name: "Hermione",
      last_name: "Granger",
      username: "wingardiumleviosa",
      games_played: 200,
    },
  ]
);

const [isFormOpen, setIsFormOpen] = useState(false)

const openForm = () => {
  setIsFormOpen(true)
}

const closeForm = () => {
  setIsFormOpen(false)
}

const handleAddUser = (firstName, lastName, userName) => {
  const newUser = {
    first_name: firstName,
    last_name: lastName,
    username: userName,
    games_played: 0,
  }
  setPlayers((players) => [...players, newUser]);
  console.log(players)
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>VideoGame Users</h2>
      {
        isFormOpen ? 
          <div>
            <Form onAddUser={handleAddUser} players={players}/>
            <button className="close-form-button" onClick={closeForm}>Close Form</button>
          </div>
          : 
          <button className="open-form-button" onClick={openForm}>Create New User</button>
      }
      <Players players={players}/>
    </div>
  );
};

export default App;
