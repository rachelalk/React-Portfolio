export default function ImageHoverOver({array}) {


	// return (
	// 	<div className="tech-stack">
	// 		{techStackData.map((object) => (
	// 			<img
	// 				key={object.id}
	// 				id={object.id}
	// 				alt={object.alt}
	// 				src={object.src}
	// 			></img>
	// 		))}
	// 	</div>
	// );

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
