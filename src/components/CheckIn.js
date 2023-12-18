import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RoomActions } from "../Redux/Slice/RoomSlice";

const CheckIn = () => {
	const checkIn = useSelector((state) => state.room.checkIn);
	const dispatch = useDispatch();

	const handleCheckInChange = (date) => {
		dispatch(RoomActions.setCheckIn(date));
		dispatch(RoomActions.autoFillCheckOut());
	};

	return (
		<div className="relative flex items-center h-full justify-end">
			<div className="absolute z-10 pr-8">
				<div>
					<BsCalendar className="text-accent text-base" />
				</div>
			</div>
			<DatePicker
				className="w-full h-full"
				selected={checkIn}
				placeholderText="Check In"
				onChange={handleCheckInChange}
				minDate={new Date()} // Set minDate to today's date
			/>
		</div>
	);
};

export default CheckIn;
