export default function TechStack() {

    const techStackData = [
			{
				id: "htmlcssjs",
				alt: "html5 CSS JavaScript",
				src: "./Images/html css js logos.png",
			},
			{
				id: "nodejs",
				alt: "node JS",
				src: "./Images/node js.png",
			},
			{
				id: "sql",
				alt: "postgreSQL",
				src: "./Images/sql.png",
			},
			{
				id: "jest",
				alt: "jest",
				src: "./Images/jest.jpeg",
			},
			{
				id: "cypress",
				alt: "cypress",
				src: "./Images/cypress.webp",
			},
			{
				id: "react",
				alt: "react",
				src: "./Images/react.webp",
			},
		];

 
	return (
		<div>
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
