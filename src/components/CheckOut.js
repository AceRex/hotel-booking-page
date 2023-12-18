import React from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar } from "react-icons/bs";

import { RoomActions } from "./../Redux/Slice/RoomSlice";

const CheckOut = () => {
	const checkIn = useSelector((state) => state.room.checkIn);
	const checkOut = useSelector((state) => state.room.checkOut);
	const dispatch = useDispatch();

	const handleCheckOutChange = (date) => {
		dispatch(RoomActions.setCheckOut(date));
	};

	// const handleCheckInChange = (date) => {
	// 	dispatch(RoomActions.setCheckIn(date));
	// 	dispatch(RoomActions.autoFillCheckOut());
	// };

	return (
		<div className="relative flex items-center h-full justify-end">
			<div className="absolute z-10 pr-8">
				<div>
					<BsCalendar className="text-accent text-base" />
				</div>
			</div>
			<DatePicker
				className="w-full h-full"
				selected={checkOut}
				placeholderText="Check Out"
				onChange={handleCheckOutChange}
				startDate={checkIn} // Set the startDate prop to the check-in date
				endDate={checkOut} // Set the endDate prop to the check-out date
				selectsEnd
				minDate={checkIn} // Set the minimum date to the check-in date
			/>
		</div>
	);
};

export default CheckOut;
