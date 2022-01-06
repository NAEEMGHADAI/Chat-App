import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
	if (!localStorage.getItem("username")) {
		return <LoginForm />;
	}
	return (
		<ChatEngine
			height="100vh"
			projectID="8d0de141-f541-4438-97cc-173ff7e8da49"
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
			renderChatFeed={(chatAppState) => {
				return <ChatFeed {...chatAppState} />;
			}}
		/>
	);
};

export default App;
