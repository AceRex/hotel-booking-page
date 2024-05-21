import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "./KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import Branch from "./branch";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RoomActions } from "../Redux/Slice/RoomSlice";

const BookForm = () => {
	const dispatch = useDispatch();
	const baseUrl = useSelector((state) => state.company.baseUrl);
	const checkIn = useSelector((state) => state.room.checkIn);
	const checkout = useSelector((state) => state.room.checkOut);
	const datein = useSelector((state) => state.room.formatcheckIn);
	const dateout = useSelector((state) => state.room.formatcheckOut);
	const token = useSelector((state) => state.company.auth_token);

	const branch = useSelector((state) => state.room.branch);

	function formatDateString(dateString) {
		let date = new Date(dateString);
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		month = month < 10 ? "0" + month : month;
		day = day < 10 ? "0" + day : day;
		return `${year}-${month}-${day}`;
	}
	let formatcheckin = formatDateString(checkIn);
	let formatcheckout = formatDateString(checkout);

	dispatch(RoomActions.setFormatedCheckIn(formatcheckin));
	dispatch(RoomActions.setFormatedCheckOut(formatcheckout));

	const handleSearch = async () => {
		try {
			const response = await axios.get(`${baseUrl}/api/v1/Rooms/Availability/ByBranchId/${branch}/${datein}/${dateout}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			dispatch(RoomActions.setData(response.data));
		} catch (error) {
			console.log(error);
		}
	};
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
				<div className="flex-1 border-r">
					<Branch />
				</div>

				<div className="btn btn-primary" onClick={handleSearch}>
					Check Now
				</div>
			</div>
		</form>
	);
};

export default BookForm;
