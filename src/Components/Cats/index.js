import CatCarousel from "../CatCarousel";
import catCarouselData from "../../libs/catCarouselData";
export default function Cats() {
	return (
		<main>
			<h1 className="heading-margin">Cats</h1>
			<div className="cat-page">
				{/* <div className="cat-headings">
					
				</div> */}
				<div className="cats-container">
					<div className="cat-content">
						<div className="cat-name-photo">
							<h2 className="cat-heading">Lily</h2>
							<img id="lily-image" alt="black cat" src="./Images/lily.jpeg" />
						</div>
						<div className="cat-info">
							<div className="margin"></div>
							Age: 11<br></br> <br></br>
							Likes:
							<ul>
								<li>Sleeping on chairs</li>
								<li>Cat sticks</li>
								<li>Sunbathing</li>
								<li>Screaching</li>
							</ul>
							<br></br>
							Dislikes:
							<ul>
								<li>Flea treatment</li>
								<li>Rain</li>
								<li>Being kept inside</li>
							</ul>
						</div>
					</div>
					<div className="cat-content">
						<div className="cat-name-photo">
							<h2 className="cat-heading">Lenny</h2>
							<img
								id="lenny-image"
								alt="grey and white cat"
								src="./Images/lenny.jpeg"
							/>
						</div>
						<div className="cat-info">
							<div className="margin"></div>
							Age: 2<br></br> <br></br>
							Likes:
							<ul>
								<li> Sleeping in dirt</li>
								<li> Chicken</li>
								<li> Chasing bugs</li>
								<li>Cuddles</li>
							</ul>
							<br></br>
							Dislikes:
							<ul>
								<li>Strangers</li>
								<li>Vets</li>
								<li>Losing fights with neighbourhood cats</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="cat-carousel-container">
				<CatCarousel array={catCarouselData}></CatCarousel>
			</div>
		</main>
	);
}
