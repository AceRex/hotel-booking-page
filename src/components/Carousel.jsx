import { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaDotCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import Img from "../assets/img/rooms/1.png";

const CarouselView = () => {
	const img = useSelector((state) => state.room.galleryImage);
	const baseUrl = useSelector((state) => state.company.baseUrl);
	const tenant_id = useSelector((state) => state.company.m_id);
	const imgURL = `${baseUrl}/storage/uploads/tenant/${tenant_id}/rooms/`;

	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? img.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === img.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="max-w-[100%] h-[250px] lg:h-[500px] w-full relative group">
			<div
				style={{
					backgroundImage: `url(${imgURL && img.length > 0 ? imgURL + img[currentIndex] : Img})`,
				}}
				className="w-full h-full bg-center bg-cover duration-500"
			></div>

			<div className="hidden group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 text-2xl rounded-full p-2">
				<FaArrowLeft className="text-accent" onClick={prevSlide} />
			</div>

			{/* right arrow */}
			<div className="hidden group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 text-2xl rounded-full p-2">
				<FaArrowRight className="text-accent" onClick={nextSlide} />
			</div>

			<div className="flex top-4 justify-center gap-3 py-2 ">
				{img.map((slides, index) => (
					<div key={index} onClick={() => goToSlide(index)} className="text-2xl cursor-pointer">
						<FaDotCircle className="text-accent" />
					</div>
				))}
			</div>
		</div>
	);
};
export default CarouselView;
