import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PostView from "./Pages/PostView/PostView";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Write from "./Pages/Write/Write";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
	const { user } = useContext(Context);
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/register">
					{user ? <Home /> : <Register />}
				</Route>
				<Route path="/login">
					{user ? <Home /> : <Login />}
				</Route>
				<Route path="/write">
					{user ? <Write /> : <Login />}
				</Route>
				<Route path="/settings">
					{user ? <Settings /> : <Login />}
				</Route>
				<Route path="/post/:postId">
					<PostView />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
