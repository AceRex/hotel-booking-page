import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SpinnerDotted } from "spinners-react";

import { RoomContext } from "./../context/RoomContext";
import Room from "../components/Room";
const Rooms = () => {
	const { rooms, loading } = useContext(RoomContext);
	const Data = useSelector((state) => state.room.data);
	console.log(Data.roomTypeInfo);
	console.log(Data.roomTypePrice);

	return (
		<section className=" py-24">
			{loading && (
				<div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
					<SpinnerDotted color="white" />
				</div>
			)}
			<div className="container mx-auto lg:px:0">
				<div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
					{rooms.map((room) => {
						return <Room room={room} key={room.id} />;
					})}
				</div>

				{/* <div>
					{Data.roomTypeInfo.map((items) => {
						return <h2>{items}</h2>;
					})}
				</div> */}
			</div>
		</section>
	);
};

export default Rooms;
