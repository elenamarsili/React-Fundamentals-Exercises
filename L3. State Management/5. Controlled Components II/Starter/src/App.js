import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./Form";
import DeleteLast from "./DeleteLast";
import ItemsList from "./ItemsList";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <Form onAddItem={handleAddItem} />

      <DeleteLast
        onDeleteLastItem={handleDeleteLastItem}
        buttonDisabled={noItemsFound()}
      />

      <ItemsList items={items} />
    </div>
  );
};

export default App;
