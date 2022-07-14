import Carousel from "../PortfolioCarousel";
import portfolioData from "../../libs/portfolioData";


export default function Portfolio() {

	return (
		<main>

			<h1 className="heading-margin">Portfolio</h1>
			<Carousel array={portfolioData}></Carousel>
			<br></br>
			<br></br>
			<h2 className="subheading-centre">
				Full portfolio available on{" "}
				<a href="https://github.com/rachelalk">Github</a>.
			</h2>
			<br></br>
			<br></br>

		</main>
	);
}
