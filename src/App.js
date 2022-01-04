import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="8d0de141-f541-4438-97cc-173ff7e8da49"
			userName="Naeem"
			userSecret="12345"
			renderChatFeed={(chatAppState) => {
				return <ChatFeed {...chatAppState} />;
			}}
		/>
	);
};

export default App;
