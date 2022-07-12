import techStackData from "../../libs/techStackData";
export default function TechStack() {
	return (
		<div className="tech-stack">
			{techStackData.map((object) => (
				<img
					key={object.id}
					id={object.id}
					alt={object.alt}
					src={object.src}
				></img>
			))}
		</div>
	);
}
