import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import FallbackImage from "../assets/img/fallback.png";

const RoomCard = ({ DefaultImage, bed, totalGuest, RoomTypeName, Price, ShortDescription }) => {
	return (
		<div className="">
			<div className="bg-red shadow-2xl min-h-[500px] group">
				<div className="overflow-hidden h-[250px]">
					<img className="group-hover:scale-110 transition-all duration-300 w-full" src={DefaultImage} onError={FallbackImage} alt="room images" />
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
								<div> {bed}</div>
							</div>
						</div>

						<div className="flex items-center gap-x-2 ">
							<div className="text-accent">
								<BsPeople className="text-[15px]" />
							</div>
							<div className="flex gap-x-1">
								<div> Max People </div>
								<div>{totalGuest}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center h-[20%]">
					<h3 className="h3">{RoomTypeName}</h3>

					<p className="max-w-[300px] mx-auto mb-3 lg:mb-6 ">{ShortDescription}</p>
				</div>
				<div className="mt-10">
					<Link to={`/room/${RoomTypeName}`} className="btn btn-secondary btn-sm max-w-[400px] mx-auto">
						Book {RoomTypeName} from ₦ {Price}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
