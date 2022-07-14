import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



export default function PortfolioCarousel({array}) {
const handleClick = () => {
	
}

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			{array.map((object) => (
				<SwiperSlide>
					<div classname="carousel-slide">
						<div>
							<figure className="carousel-portfolio ">
								<div className="carousel-portfolio ">
									<h2 className="carousel-header">{object.heading}</h2>
									<h3>{object.role}</h3>
									<img
										className="carousel-portfolio "
										id={object.id}
										src={object.src}
										alt={object.alt}
									/>
								</div>
								<figcaption className="carousel-portfolio ">
									<p className="portfolio-text">{object.text}</p>
									<p className="github-portfolio">
										<a href={object.link}>View GitHub Repo</a>
									</p>
								</figcaption>
							</figure>
						</div>
					</div>
				</SwiperSlide>
			))}
			...
		</Swiper>
	);
}




// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// export default function PortfolioCarousel({array}) {
// 	return (
// 		<Swiper
// 			modules={[Navigation, Pagination, Scrollbar, A11y]}
// 			spaceBetween={50}
// 			slidesPerView={3}
// 			navigation
// 			pagination={{ clickable: true }}
// 			scrollbar={{ draggable: true }}
// 			onSwiper={(swiper) => console.log(swiper)}
// 			onSlideChange={() => console.log("slide change")}
// 		>

// 		{array.map((object) => (
// 			<SwiperSlide>
// 				<div classname="carousel-slide">
// <h2 className="carousel-header">{object.heading}</h2>
// 					<a href={object.link}>
// 						<img
// 							className="carousel-image"
// 							id={object.id}
// 							src={object.src}
// 							alt={object.alt}
// 						/>
// 					</a>
// 					<p className="carousel-description">
// 						{object.text}
// 					</p>
// 				</div>
// 				</SwiperSlide>
// 			))}

// 			...
// 		</Swiper>
// 	);
// }
