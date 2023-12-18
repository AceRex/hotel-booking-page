import { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaDotCircle } from "react-icons/fa";
import Img from "../assets/img/rooms/1.png";
import Img2 from "../assets/img/rooms/2.png";
import Img3 from "../assets/img/rooms/3.png";
import Img4 from "../assets/img/rooms/4.png";
import Img5 from "../assets/img/rooms/5.png";
import Img6 from "../assets/img/rooms/6.png";

const CarouselView = () => {
	const sliders = [
		{
			url: `${Img}`,
		},
		{
			url: `${Img2}`,
		},
		{
			url: `${Img3}`,
		},
		{
			url: `${Img4}`,
		},
		{
			url: `${Img5}`,
		},
		{
			url: `${Img6}`,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === sliders.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="max-w-[100%] h-[300px] w-full relative group">
			<div
				style={{
					backgroundImage: `url(${sliders && sliders.length > 0 ? sliders[currentIndex].url : ""})`,
				}}
				className="w-full h-full bg-center bg-cover duration-500"
			></div>
			{/* left arrow */}
			<div className="hidden group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 text-2xl rounded-full p-2">
				<FaArrowLeft className="text-accent" onClick={prevSlide} />
			</div>

			{/* right arrow */}
			<div className="hidden group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 text-2xl rounded-full p-2">
				<FaArrowRight className="text-accent" onClick={nextSlide} />
			</div>

			<div className="flex top-4 justify-center gap-3 py-2 ">
				{sliders.map((slides, index) => (
					<div key={index} onClick={() => goToSlide(index)} className="text-2xl cursor-pointer">
						<FaDotCircle className="text-accent" />
					</div>
				))}
			</div>
		</div>
	);
};
export default CarouselView;
