import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
	console.log(props);
	const { chats, activeChat, userName, message } = props;
	const chat = chats && chats[activeChat];
	console.log(chat, userName, message);
	return <div>ChatFeed</div>;
};

export default ChatFeed;
