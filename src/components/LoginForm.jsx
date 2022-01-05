import { useState } from "react";
import axios from "axios";
const LoginForm = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const authObject = {
			"Project-ID": "8d0de141-f541-4438-97cc-173ff7e8da49",
			"User-Name": username,
			"User-Secret": password,
		};
		try {
			//username / password => chatengine -> give messages
			await axios.get("https://api.chatengine.io/chats", {
				headers: authObject,
			});
			//works out -> logged in
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
			window.location.reload();
		} catch (error) {
			setError("Invalid username or password");
			// error -> try with different username / password...
		}
	};
	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="User Name"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<div align="center">
						<button type="submit" className="button">
							<span>Start Chatting</span>
						</button>
					</div>
					<h2 className="error"> {error}</h2>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
