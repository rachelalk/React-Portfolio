export default function ImageHoverOver({ array }) {
	return (
		<div className="hover-over-container">
			{array.map((object) => (
				<div classname="hover-over-item">
					<figure>
						<img src={object.src} />
						<figcaption>{object.text}</figcaption>
					</figure>
				</div>
			))}
		</div>
	);
}
