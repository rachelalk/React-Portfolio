import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MainNavBar() {
	return (
		<nav className="top-nav">
			<div className="nav-left">
				<div className="soc-logo">
					<a href="https://www.schoolofcode.co.uk/">
						<img
							id="soc-logo"
							src="./Images/soc-logo.png"
							alt="School of Code Logo"
						/>
					</a>
				</div>
				<Link to="/">Home</Link>
			</div>
			<div className="nav-right">
				<Link to="/portfolio">Portfolio</Link>{" "}
				<Link to="/experience">Experience</Link>{" "}
				<Link to="/Interests">Interests</Link>{" "}
				<Link to="/cats" id="cats">
					Cats
				</Link>
			</div>
		</nav>
	);
}
