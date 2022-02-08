import "./PostView.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";

export default function PostView() {
	return (
		<div className="postView">
			<SinglePost />
			<Sidebar />
		</div>
	);
}
