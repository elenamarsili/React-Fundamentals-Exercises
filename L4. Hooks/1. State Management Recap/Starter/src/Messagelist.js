import "./App.css";
import Message from "./Message";

const MessageList = ({user, messages}) => {

    return (
        <div>
          <ul className="message-list">
            {messages.map((message, index) => (
                <Message key={index} message={message} user={user} />
            ))}
          </ul>
        </div>
    )
};

export default MessageList;