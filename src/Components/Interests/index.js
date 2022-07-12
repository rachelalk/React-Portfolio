import MainNavBar from "../MainNavBar";
import Footer from "../Footer";
import ImageHoverOver from "../ImageHoverOver";
import FooterMoves from "../FooterMoves";

export default function Interests() {
	const interestsData = [
		{
			id: "music",
			text: "Although I don't have a musical bone in my body, I love music and watching live music. This photo was taken at the first gig I attended after lockdown and I had an amazing time.",
			src: "./Images/music.jpeg",
		},
		{
			id: "comedy",
			text: "I am a huge fan of comedy, I enjoy musical comedy, stand up comedy and podcasts with a comedic element to them. I have been lucky enough to have attended the Edinburgh Fringe festival around 5 times and have seen some fantastic acts whilst there.",
			src: "./Images/fringeLogo.jpeg",
		},
		{
			id: "buffyLogo",
			text: "I have always been a Buffy fan. It was the show that I grew up with, I even went to a few conventions as a teenager, so I'll always have a soft spot for it.",
			src: "./Images/buffyLogo.webp",
		},
		{
			id: "theatre",
			text: "I was never a huge theatre fan until I moved to Manchester for University and got a part time job at the Palace Theatre. Now I love it and have seen so many shows, here in Manchester, on the West End and even on Broadway.",
			src: "./Images/theatre.jpeg",
		},
		{
			id: "travel",
			text: "I love to travel and visit new places. I have been really fortunate to have the opportunity to visit so many places in my life. This photo was taken at Chichén Itzá after a 4 hour coach ride to get there. Such an amazing place to visit and totally worth the journey.",
			src: "./Images/travel.jpeg",
		},
		{
			id: "animals",
			text: "I am a huge animal lover and a strong believer in the importance of conservation. I am lucky enough to live within an hour's drive of Chester Zoo which does so much good work and is a great day out!",
			src: "./Images/chesterZoo.jpeg",
		},
	];

	return (
		<main>

			<h1 className="heading-margin">Interests</h1>
			<ImageHoverOver array={interestsData}></ImageHoverOver>

		</main>
	);
}
