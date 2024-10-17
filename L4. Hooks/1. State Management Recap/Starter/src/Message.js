import "./App.css";

const Message = ({user, message}) => {

    return (
        <li
        className={
            message.username === user.username
            ? "message sender"
            : "message recipient"
        }
        >
            <p>{`${message.username}: ${message.text}`}</p>
        </li>
    )
};

export default Message;