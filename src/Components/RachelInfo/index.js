import TechStack from "../TechStack";

export default function RachelInfo() {
	return (
		<div className="landingInfo">
			<h1 className="heading">Rachel Alker</h1>
			<p id="landingP">
				Hello, I’m Rachel! 👋🏻
				<br></br> I'm based in Manchester and have just graduated from the
				School of Code and am now looking to secure my first role in tech.{" "}
				<br></br>
				<br></br>Before beginning my journey into tech I was a primary school
				teacher so I have more transferrable skills than you could count, some
				of the most important being patience, an enthusiasm for learning and the
				ability to work with pretty much anybody!<br></br>
				<br></br>I have learnt an incredible amount since starting the bootcamp,
				sometimes it's hard to believe that I have only been doing this a few
				months when I stop to look at what I have created, both in a team and
				alone. I look forward to continuing to learn and develop throughout my
				career.
				<br></br>
				<br></br>
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
