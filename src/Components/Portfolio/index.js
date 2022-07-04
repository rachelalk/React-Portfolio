import MainNavBar from "../MainNavBar";
import Footer from "../Footer";
import Carousel from "../Carousel"



export default function Portfolio() {
	return (
		<main>
			<MainNavBar></MainNavBar>
			<h1 class="heading-margin">Portfolio</h1>
			<Carousel></Carousel>
			<br></br>
			<h2 className="subheading-centre">
				Full portfolio available on <a href="https://github.com/rachelalk">Github</a>.
			</h2>
			<Footer></Footer>
		</main>
	);
}
