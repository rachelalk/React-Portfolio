import "./App.css";
import React from "react";
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import MainNavBar from "../MainNavBar";
import RachelInfo from "../RachelInfo";
import FooterMoves from "../FooterMoves";

import Experience from "../Experience";
import Cats from "../Cats";
import Interests from "../Interests";
import Portfolio from "../Portfolio";

export default function App() {
	return (
		<div className="body">
			<BrowserRouter>
				<MainNavBar></MainNavBar>
				<Routes>
					<Route exact path="/" element={<RachelInfo />} />
					<Route path="experience" element={<Experience />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="cats" element={<Cats />} />
					<Route path="Interests" element={<Interests />} />
				</Routes>
				<FooterMoves></FooterMoves>
			</BrowserRouter>
		</div>
	);
}
