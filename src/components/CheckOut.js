import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
	const [endDate, setEndDate] = useState();
	return (
		<div className="relative flex items-center h-full justify-end ">
			<div className="absolute z-10 pr-8">
				<div>
					<BsCalendar className="text-accent text-base" />
				</div>
			</div>
			<DatePicker className="w-full h-full" selected={endDate} placeholderText="Check Out" onChange={(date) => setEndDate(date)} />
		</div>
	);
};

export default CheckOut;
