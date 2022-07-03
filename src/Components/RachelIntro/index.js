import TechStack from "../TechStack";

export default function RachelInfo() {
	return (
		<div className="landingInfo">
			<h1 className="heading">Rachel Alker</h1>
			<p id="landingP">
				Hello, I’m Rachel! I’m based in Manchester and am currently a student at
				the School of Code. <br></br>Looking forward to securing my first role
				in tech.<br></br>
				Please feel free to contact me via email or connect with me on Twitter,
				GitHub or LinkedIn.
			</p>
			<div className="rachel-pic">
				<img id="rachel-pic" alt="Rachel Alker" src="./Images/rachel.jpeg" />
			</div>
			<TechStack></TechStack>
		</div>
	);
}
