import {useState} from 'react';
import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
  const [likes, setLikes] = useState(0)
  const increaseLikes = () => {setLikes(likes+ 1)};

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {likes}</p>
      <button onClick={increaseLikes}>Like</button>
    </div>
  );
};

export default App;
