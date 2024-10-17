import {useState} from "react";
import "./App.css";

const MessageInput = ({user, onAddMessage}) => {
    const [message, setMessage] = useState("")

    const isDisabled = !message && true;

    const handleInputChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSendMessage = (event) => {
        event.preventDefault();
        onAddMessage(user, message);
        setMessage("");
    }

    return (
        <div>
            <form className="input-group" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message..."
                    value={message}
                    onChange={handleInputChange}
                />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={isDisabled}>
                        SEND
                    </button>
                </div>
            </form>
        </div>
    )
};

export default MessageInput;