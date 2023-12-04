import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar } from "react-icons/bs";

import { RoomActions } from "./../Redux/Slice/RoomSlice";

const CheckOut = () => {
	const checkOut = useSelector((state) => state.room.checkOut);
	const dispatch = useDispatch();
	return (
		<div className="relative flex items-center h-full justify-end ">
			<div className="absolute z-10 pr-8">
				<div>
					<BsCalendar className="text-accent text-base" />
				</div>
			</div>
			<DatePicker className="w-full h-full" selected={checkOut} placeholderText="Check Out" onChange={(date) => dispatch(RoomActions.setCheckOut(date))} />
		</div>
	);
};

export default CheckOut;
