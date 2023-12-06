import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Img3 from "../assets/img/heroSlider/3.jpg";

const RoomCard = () => {
	const Data = useSelector((state) => state.room.data);
	// console.log(Data);
	return (
		<div className="container mx-auto lg:px:0">
			<div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
				{Data.map((room) => (
					<div className="bg-red shadow-2xl min-h-[500px] group">
						<div className="overflow-hidden">
							<img className="group-hover:scale-110 transition-all duration-300 w-full" src={Img3} alt="room images" />
						</div>

						{/* DETAILS */}
						<div className="bg-white shadow-lg max-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
							<div className="flex justify-between w-[80%]">
								<div className="flex items-center gap-x-2 ">
									<div className="text-accent">
										<BsArrowsFullscreen className="text-[15px]" />
									</div>
									<div className="flex gap-x-1">
										<div> Bed</div>
										<div> {room.NoOfBed}</div>
									</div>
								</div>

								<div className="flex items-center gap-x-2 ">
									<div className="text-accent">
										<BsPeople className="text-[15px]" />
									</div>
									<div className="flex gap-x-1">
										<div> Max People </div>
										<div>{room.AdultNo + room.ChildNo}</div>
									</div>
								</div>
							</div>
						</div>

						<div className="text-center">
							<h3 className="h3">{room.RoomTypeName}</h3>

							<p className="max-w-[300px] mx-auto mb-3 lg:mb-6 ">{room.ShortDescription}</p>
						</div>

						<Link to={"/"} className="btn btn-secondary btn-sm max-w-[500px] mx-auto">
							Book Deluxe from ₦24,999
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default RoomCard;
