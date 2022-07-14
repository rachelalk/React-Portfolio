export default function ExperienceHoverOver({ array }) {
	return (
		<div className="experience-hover-over-container">
			{array.map((object) => (
				<div classname="experience-hover-over-item">
					<figure>
						<div className="experience-main-display">
							<h3>{object.years}</h3>
							<h3>{object.role}</h3>
							<img
								alt="company logo"
								className="experience-image"
								src={object.src}
							/>
						</div>
						<figcaption className="experience-text">{object.text}</figcaption>
					</figure>
				</div>
			))}
		</div>
	);
}
