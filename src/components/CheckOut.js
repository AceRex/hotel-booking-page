import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar } from "react-icons/bs";

import { CheckOutActions } from "./../Redux/Slice/CheckOut";

const CheckOut = () => {
	const checkOut = useSelector((state) => state.checkout.checkOut);
	const dispatch = useDispatch();
	return (
		<div className="relative flex items-center h-full justify-end ">
			<div className="absolute z-10 pr-8">
				<div>
					<BsCalendar className="text-accent text-base" />
				</div>
			</div>
			<DatePicker className="w-full h-full" selected={checkOut} placeholderText="Check Out" onChange={(date) => dispatch(CheckOutActions.setCheckOut(date))} />
		</div>
	);
};

export default CheckOut;
