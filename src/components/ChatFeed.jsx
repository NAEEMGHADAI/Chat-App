import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
	// console.log("props: ", props);
	const { chats, activeChat, userName, messages } = props;
	const chat = chats && chats[activeChat];
	const renderReadReceipts = (message, isMyMessage) => {
		return chat.people.map((person, index) => {
			return (
				person.last_read === message.id && (
					<div
						key={`read_${index}`}
						className={`read-receipt`}
						style={{
							float: isMyMessage ? "right" : "left",
							backgroundImage: `url(${person?.person?.avatar})`,
						}}
					/>
				)
			);
		});
	};

	const renderMesseges = () => {
		const keys = Object.keys(messages);
		return keys.map((key, index) => {
			const message = messages[key];

			const lastMessageKey = index === 0 ? null : messages[keys[index - 1]];
			const isMyMessage = message.sender.username === userName;
			return (
				<div key={`msg_${index}`} style={{ width: "100%" }}>
					<div className="message-block">
						{isMyMessage ? (
							<MyMessage message={message} />
						) : (
							<TheirMessage
								message={message}
								lastMessage={messages[lastMessageKey]}
							/>
						)}
					</div>
					<div
						className="read-receipts"
						style={{
							marginRight: isMyMessage ? "18px" : "0px",
							marginLeft: isMyMessage ? "0px" : "68px",
						}}
					>
						{renderReadReceipts(message, isMyMessage)}
					</div>
				</div>
			);
		});
	};

	const logOut = () => {
		localStorage.clear();
		window.location.reload();
	};

	if (!chat) {
		return (
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
	// console.log("chat: ", chat, userName, messages);
	return (
		<div className="chat-feed">
			<div className="chat-title-container">
				<div className="chat-title">
					{chat?.title}
					<button
						onClick={logOut}
						style={{
							float: "right",
							cursor: "pointer",
							border: "none",
							color: "#3B2A50",
							paddingTop: "8px",
						}}
					>
						<i className="fas fa-2x fa-sign-out-alt" color="#3B2A50"></i>
					</button>
				</div>
				<div className="chat-subtitle">
					{chat.people.map((person) =>
						`${person.person.username} `.split(" /")
					)}
				</div>
			</div>
			{renderMesseges()}
			<div style={{ height: "100px" }} />
			<div className="message-form-container">
				<MessageForm {...props} chatId={activeChat} />
			</div>
		</div>
	);
};

export default ChatFeed;
