import {useState} from 'react';
import "./App.css";
import Player from './Player';

const Players = ({players}) => {
    const [isToggleOn, setIsToggleOn] = useState(true)
    const handleClick = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <div className="players">
                {players.map(player => 
                    <Player key={player.username} isToggleOn={isToggleOn} player={player}/>
                )}
            </div>
            {
                isToggleOn ?
                    <button className="close-form-button" onClick={handleClick}>Hide the Number of Games Played</button>
                    :
                    <button className="open-form-button" onClick={handleClick}>Show the Number of Games Played</button>
            }
        </div>
    )
};

export default Players