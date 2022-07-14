import ExperienceHoverOver from "../ExperienceHoverOver";
import experienceData from "../../libs/experienceData";

export default function Experience() {
	return (
		<main>

			<h1 className="heading-margin">Prior Experience</h1>
<ExperienceHoverOver array={experienceData}></ExperienceHoverOver>
		</main>
	);
}
