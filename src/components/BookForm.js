import React, { useContext } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "./KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

const BookForm = () => {
	const CheckInDate = useSelector((state) => state.room.checkin);
	const CheckOutDate = useSelector((state) => state.room.checkOut);
	const AdultNo = useSelector((state) => state.room.adult);
	const KidNo = useSelector((state) => state.room.kid);

	return (
		<form className="h-[400px] w-full lg:h-[75px]">
			<div className="flex flex-col w-full h-full lg:flex-row">
				<div className="flex-1 border-r">
					<CheckIn />
				</div>
				<div className="flex-1 border-r">
					<CheckOut />
				</div>
				<div className="flex-1 border-r">
					<AdultsDropdown />
				</div>
				<div className="flex-1 border-r">
					<KidsDropdown />
				</div>

				<button type="submit" className="btn btn-primary">
					Check Now
				</button>
			</div>
		</form>
	);
};

export default BookForm;
