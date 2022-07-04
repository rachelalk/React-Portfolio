import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../Footer";
import MainNavBar from "../MainNavBar";
import RachelInfo from "../RachelIntro";
import FooterMoves from "../FooterMoves";

export default function App() {
	return (
		<div className="body">
			<div className="content-wrap">
				<MainNavBar></MainNavBar>
				<RachelInfo></RachelInfo>
			</div>
			<Footer></Footer>
		</div>
	);
}
