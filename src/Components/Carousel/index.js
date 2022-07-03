import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel () {
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
			<SwiperSlide>
				<div className="carousel-slide">
					<h2>Pokemon API</h2>
					<a href="https://github.com/rachelalk/Pokemon-API">
						<img
							className="carousel-image"
							id="pokemonApiImage"
							src="./Images/Pokemon.png"
							alt="Pokemon API"
						/>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<div className="carousel-slide">
					<h2>Pokemon API</h2>
					<a href="https://github.com/rachelalk/Pokemon-API">
						<img
							className="carousel-image"
							id="pokemonApiImage"
							src="./Images/Pokemon.png"
							alt="Pokemon API"
						/>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<div className="carousel-slide">
					<h2>Pokemon API</h2>
					<a href="https://github.com/rachelalk/Pokemon-API">
						<img
							className="carousel-image"
							id="pokemonApiImage"
							src="./Images/Pokemon.png"
							alt="Pokemon API"
						/>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<div className="carousel-slide">
					<h2>Pokemon API</h2>
					<a href="https://github.com/rachelalk/Pokemon-API">
						<img
							className="carousel-image"
							id="pokemonApiImage"
							src="./Images/Pokemon.png"
							alt="Pokemon API"
						/>
					</a>
				</div>
			</SwiperSlide>
			...
		</Swiper>
	);
};
