import ImageHoverOver from "../ImageHoverOver";
import interestsData from "../../libs/interestsData";

export default function Interests() {
	return (
		<main>
		{/* <div className="interests-container"> */}
			<h1 className="heading-margin">Interests</h1>
			<ImageHoverOver array={interestsData}></ImageHoverOver>
			{/* </div> */}
		</main>
	);
}
