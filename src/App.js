import "./App.css";
import { Categories } from "./Categories";
import { HelpMe } from "./HelpMe";
import { Landing } from "./Landing";
import DrawerAppBar from "./Navbar";
import { NewsLetter } from "./NewsLetter";
// import Navbar from "./Navbar";

function App() {
	return (
		<div>
			<DrawerAppBar />
			<Landing />
			<Categories />
			<HelpMe />
			<NewsLetter />
		</div>
	);
}

export default App;
