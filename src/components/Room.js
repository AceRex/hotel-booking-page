import React from "react";

import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
	const { RoomNo, Areasize, AdultNo, ChildNo, RoomTypeName, DefaultImage, ShortDescripition, id } = room;
	return (
		<div className="bg-white shadow-2xl min-h-[500px] group">
			<div className="overflow-hidden">
				<img className="group-hover:scale-110 transition-all duration-300 w-full" src={`https://demo.cranesoft-digitalmenu.com/storage/uploads/tenant/product/${DefaultImage}`} alt="room images" />
			</div>

			{/* Details*/}
			<div className="bg-white shadow-lg max-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
				<div className="flex justify-between w-[80%]">
					<div className="flex items-center gap-x-2 ">
						<div className="text-accent">
							<BsArrowsFullscreen className="text-[15px]" />
						</div>
						<div className="flex gap-x-1">
							<div> Size</div>
							<div>{Areasize} m2</div>
						</div>
					</div>

					<div className="flex items-center gap-x-2 ">
						<div className="text-accent">
							<BsPeople className="text-[15px]" />
						</div>
						<div className="flex gap-x-1">
							<div> Max People </div>
							<div>{AdultNo + ChildNo}</div>
						</div>
					</div>
				</div>
			</div>

			{/* names */}

			<div className="text-center">
				<Link to={`/room/${RoomNo}`}>
					<h3 className="h3">{RoomTypeName}</h3>
				</Link>

				<p className="max-w-[300px] mx-auto mb-3 lg:mb-6 ">{ShortDescripition}</p>
			</div>

			{/* Btn*/}

			<Link to={`/room/${RoomNo}`} className="btn btn-secondary btn-sm max-w-[300px] mx-auto">
				Book now from ₦
			</Link>
		</div>
	);
};

export default Room;
