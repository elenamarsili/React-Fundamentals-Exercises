import {useState} from 'react';
import "./App.css";

const Form = ({ onAddUser, players }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [isUsernameError, setIsUsernameError] = useState(false);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "username") {
            const isUnique = players.filter((player) => player.username === value).length === 0;
            setIsUsernameError(!isUnique);
            if (isUnique) {
                setUsername(value);
            }
        } else if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        }
    };

    const addUser = (event) => {
        event.preventDefault();
        onAddUser(firstName, lastName, username);
        setFirstName("");
        setLastName("");
        setUsername("");
      };

    const isButtonDisabled = !firstName || !lastName || !username || isUsernameError;

    return (
        <div className="form">
            <h3>Create New User</h3>
            <form className="inputs" onSubmit={addUser}>
                <input name= "firstName" type="text" className="input" placeholder="Enter first name" value={firstName} onChange={handleInputChange}></input>
                <input name= "lastName" type="text" className="input" placeholder="Enter last name" value={lastName} onChange={handleInputChange}></input>
                <input name= "username" type="text" className="input" placeholder="Enter username" value={username} onChange={handleInputChange}></input>
                {
                    isUsernameError &&
                    <p className="error-message">Error: this username already exists</p>
                }
                <button className="open-form-button" disabled={isButtonDisabled}>Create New User</button>
            </form>
        </div>
        
    )
};

export default Form;