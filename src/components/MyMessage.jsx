const MyMessage = ({ message }) => {
	if (message?.attachment?.length > 0) {
		return (
			<img
				src={message.attachment[0].file}
				alt="message-attachment"
				className="message-image"
				style={{ float: "right" }}
			/>
		);
	}
	const result = message.text.replace("<p>", " ").replace("</p>", " ");
	return (
		<div
			className="message"
			style={{
				float: "right",
				marginRight: "18px",
				color: "white",
				backgroundColor: "#3B2A50",
			}}
		>
			{result}
		</div>
	);
};
export default MyMessage;
