export default function ImageHoverOver({ array }) {
	return (
		<div className="hover-over-container">
			{array.map((object) => (
				<div className="hover-over-item">
					<figure className= "interests-figure">
						<img className="interests-pic" src={object.src} />
						<figcaption>{object.text}</figcaption>
					</figure>
				</div>
			))}
		</div>
	);
}
