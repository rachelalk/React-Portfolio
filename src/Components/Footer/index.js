export default function Footer() {
	return (
		<footer className="footer-fixed">
			<div className="bottom-left">
				<a href="https://www.schoolofcode.co.uk">
					<img
						id="soc-logo"
						src="./Images/socLogo.png"
						alt="School of Code Logo"
					/>
				</a>
			</div>

			<div className="bottom-right">
				<div id="email-container">
					<a href="mailto:rachelalker90@gmail.com">
						<img id="email-icon" src="./Images/email.png" alt="email icon" />
					</a>
				</div>

				<div id="twitter-container">
					<a href="https://twitter.com/rachelalk">
						<img
							id="twitter-icon"
							src="./Images/twitter.png"
							alt="twitter icon"
						/>
					</a>
				</div>

				<div id="github-container">
					<a href="https://github.com/rachelalk">
						<img id="github-icon" src="./Images/GitHub.png" alt="github icon" />
					</a>
				</div>

				<div id="linkedin-container">
					<a href="https://www.linkedin.com/in/rachel-alker-960aa122a/">
						<img
							id="linkedin-icon"
							src="./Images/LinkedIn.png"
							alt="linkedin icon"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}
