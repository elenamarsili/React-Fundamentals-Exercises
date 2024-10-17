import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  const [messageList, setMessageList] = useState(messages)

  const addNewMessage = (username, text) => {
      const newMessage = {
        username: username,
        text: text,
      }
      setMessageList((messageList) => [...messageList, newMessage]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map(user => <ChatWindow key={user.username} user={user} messages={messageList} onAddMessage={addNewMessage}/>)}
      </div>
    </div>
  );
};

export default App;
