import React, { useContext } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import { BsCalendar } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";

const CheckIn = () => {
	const { startDate, setStartDate } = useContext(RoomContext);
	return (
		<div className="relative flex items-center h-full justify-end ">
			<div className="absolute z-10 pr-8">
				<div>
					<BsCalendar className="text-accent text-base" />
				</div>
			</div>
			<DatePicker className="w-full h-full" selected={startDate} placeholderText="Check In" onChange={(date) => setStartDate(date)} />
		</div>
	);
};

export default CheckIn;
