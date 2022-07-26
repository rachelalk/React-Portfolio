import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CatCarousel({ array }) {
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
			{array.map((object) => (
				<SwiperSlide>
					<div classname="carousel-slide">
						<img
							alt="carousel of cat images"
							className="cat-carousel-image"
							src={object.src}
						/>
					</div>
				</SwiperSlide>
			))}
			...
		</Swiper>
	);
}
