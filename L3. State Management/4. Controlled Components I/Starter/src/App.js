import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("")

  const updateQuery = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" value={query} onChange={updateQuery}/>
        <p className="echo">Echo: {query}</p>
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    </div>
  );
};

export default App;
