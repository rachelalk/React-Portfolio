import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/Components/App";
import Experience from "./Components/Experience";
import Cats from "./Components/Cats";
import Interests from "./Components/Interests";
import Portfolio from "./Components/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="experience" element={<Experience />} />
			<Route path="portfolio" element={<Portfolio />} />
			<Route path="cats" element={<Cats />} />
			<Route path="Interests" element={<Interests />} />
		</Routes>
	</BrowserRouter>
);
