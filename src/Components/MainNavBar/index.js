import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MainNavBar() {
	return (
		<nav className="top-nav">
			<div className="nav-left">
				<div className="soc-logo">
				
						<img
							id="ra-logo"
							src="./Images/raLogo.png"
							alt="RA logo"
						/>
					
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
