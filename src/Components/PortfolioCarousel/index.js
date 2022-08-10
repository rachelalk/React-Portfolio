import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PortfolioCarousel({ array }) {
	const handleClick = () => {};

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			breakpoints={{
				820: {
					// width: 768,
					slidesPerView: 1,
				},
				821: {
					slidesPerView: 3,
				},
			}}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<div classname="carousel-slide">
					<div>
						<figure className="carousel-portfolio ">
							<div className="carousel-portfolio ">
								<h2 className="carousel-header">
									Couchbase Hackathon - Full Stack App
								</h2>

								<img
									className="carousel-portfolio "
									id="moorsFires"
									src="./Images/moorsApp2.png"
									alt="Moors Fires App"
								/>
							</div>
							<figcaption className="carousel-portfolio ">
								<p className="portfolio-text">
									This app was made at the Couchbase in person hackathon in
									Manchester where I worked in a team of 2, with a member of the
									Couchbase team on hand to help. We created a full stack app in
									a day, using the Couchbase database and latitude and longitude
									from the user's browser. I am proud to say that we were chosen
									as the winners of this hackathon! See the GitHub readme for
									more details.
								</p>

								<a
									className="carousel-button"
									target="_blank"
									href="https://github.com/rachelalk/Couchbase-hackathon"
								>
									<p className="carousel-button">View GitHub Repo</p>
								</a>
							</figcaption>
						</figure>
					</div>
				</div>
			</SwiperSlide>
			{array.map((object) => (
				<SwiperSlide>
					<div classname="carousel-slide">
						<div>
							<figure className="carousel-portfolio ">
								<div className="carousel-portfolio ">
									<h2 className="carousel-header">{object.heading}</h2>

									<img
										className="carousel-portfolio "
										id={object.id}
										src={object.src}
										alt={object.alt}
									/>
								</div>
								<figcaption className="carousel-portfolio ">
									<p className="portfolio-text">{object.text}</p>
									<a
										className="carousel-button"
										target="_blank"
										href={object.link}
									>
										<p className="carousel-button">View GitHub Repo</p>
									</a>

									<a
										className="carousel-button"
										target="_blank"
										href={object.deployedApp}
									>
										<p className="carousel-button">View Deployed App</p>
									</a>
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
