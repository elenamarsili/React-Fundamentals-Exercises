import "./App.css";
import MessageInput from "./MessageInput";
import MessageList from "./Messagelist";

const ChatWindow = ({user, messages, onAddMessage}) => {
    
    return (
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>
            <MessageList  user={user} messages={messages}/>
            <MessageInput user={user.username} onAddMessage={onAddMessage}/>
        </div>
    )
};

export default ChatWindow;