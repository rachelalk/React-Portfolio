import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
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
					<h2 className="carousel-header">Giraffe Support - Full stack app</h2>
					<a href="https://github.com/rachelalk/Frontend---Giraffe-Support-Ticketing-System/blob/main/README.md">
						<img
							className="carousel-image"
							id="giraffeSupportImage"
							src="./Images/giraffeSupport.png"
							alt="Giraffe Support"
						/>
					</a>
					<p className="carousel-description">
						Week 9 project. In a team of 4 we were given 4.5 days to solve a
						problem that bootcampers face. We were to go through the whole UX/UI
						process, work in an agile way, build our MVP from scratch including
						frontend and backend and prepare a presentation in this time. We
						created a ticketing system to handle help requests.
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="carousel-slide">
					<h2 className="carousel-header">Authentication using Auth0</h2>
					<a href="https://github.com/rachelalk/Auth0">
						<img
							className="carousel-image"
							id="Auth0"
							src="./Images/Auth0.png"
							alt="Auth0 authentication"
						/>
					</a>
					<p className="carousel-description">
						Week 10 hackathon. We were tasked with using the docs to figure out
						how to use Auth0 for both front and back end and then use it in a
						simple app.
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<div className="carousel-slide">
					<h2 className="carousel-header">Cat API - React</h2>
					<a href="https://github.com/rachelalk/Cats-API-with-React---Agile-working">
						<img
							className="carousel-image"
							id="catApiImage"
							src="./Images/CatAPI.png"
							alt="Cat API"
						/>
					</a>
					<p className="carousel-description">
						Week 8 hackathon project. We used Create React App to create a full
						stack React app. We spent time planning, went through the ideation
						and planning process and created an app that allows you to browse
						cat breeds, save favourites and clear your list.
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="carousel-slide">
					<h2 className="carousel-header">Books API - React</h2>
					<a href="https://github.com/rachelalk/Books-API-With-React">
						<img
							className="carousel-image"
							id="booksApiImage"
							src="./Images/booksAPI.png"
							alt="Books API"
						/>
					</a>
					<p className="carousel-description">
						Solo project, completed in an afternoon following week 8 in order to
						practice skills learnt throughout the week.
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="carousel-slide">
					<h2 className="carousel-header">To Do List - React</h2>
					<a href="https://github.com/rachelalk/React-To-Do-List">
						<img
							className="carousel-image"
							id="toDoListImage"
							src="./Images/toDoList.png"
							alt="To do list"
						/>
					</a>
					<p className="carousel-description">
						Week 7 hackathon. This was our first project with react. We had some
						trouble with this during the hackathon and didn't manage to get
						things working so I went back to it the following day and completed
						the task. Please see the read me on my github for full details.
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="carousel-slide">
					<h2 className="carousel-header">Personality Quiz - UseReducer</h2>
					<a href="https://github.com/rachelalk/useReducer-Buffy-Personality-Quiz">
						<img
							className="carousel-image"
							id="buffyPersonalityQuiz"
							src="./Images/buffy.png"
							alt="Buffy personality quiz"
						/>
					</a>
					<p className="carousel-description">
						During week 8 we were introduced to useReducer and were tasked with
						refactoring code into a useReducer and then to create a personality
						quiz of our choice and style it within react.
					</p>
				</div>
			</SwiperSlide>
			...
		</Swiper>
	);
}
