import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../Footer";
import MainNavBar from "../MainNavBar";
import RachelInfo from "../RachelIntro";




export default function App() {
	return (
		<div className="body">
			<MainNavBar></MainNavBar>
			<RachelInfo></RachelInfo>
			<Footer></Footer>
		</div>
	);
}
