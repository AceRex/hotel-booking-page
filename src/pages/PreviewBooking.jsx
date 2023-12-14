import axios from "axios";
import { BsArrowBarLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoomActions } from "../Redux/Slice/RoomSlice";

const PreviewBooking = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const previewItem = useSelector((state) => state.room.previewItem);

	const token = useSelector((state) => state.company.auth_token);
	const sampleRoom = useSelector((state) => state.room.sampleRoom);
	const CheckIn = useSelector((state) => state.room.checkIn);
	const CheckOut = useSelector((state) => state.room.checkOut);
	const Adult = useSelector((state) => state.room.adult);
	const Kids = useSelector((state) => state.room.kid);
	const Email = useSelector((state) => state.room.email);
	const Address = useSelector((state) => state.room.address);
	const Phone = useSelector((state) => state.room.phone);
	const FirstName = useSelector((state) => state.room.firstname);
	const LastName = useSelector((state) => state.room.lastname);
	const Name = FirstName + LastName;
	const TotalGuest = Adult + "," + Kids;
	const dateOptions = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	};
	const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
	const handleClose = () => {
		dispatch(RoomActions.setPreviewItem(!previewItem));
		dispatch(RoomActions.setPreviewedRoom());
	};

	const BookRoom = async () => {
		try {
			await axios.post(
				`${"https://demo.cranesoft-hotel.com/api/v1/Reservation/Create"}`,
				{
					guestName: FirstName.concat(LastName),
					Title: "Mr",
					Email: Email,
					Phone: Phone,
					Address: Address,
					City: "",
					State: "",
					Country: "",
					ZipCode: "",
					Sex: "",
					Image: "",
					passimage: "",
					passtype: "",
					passcity: "",
					passcountry: "",
					passno: "",
					passexpire: "",
					billto: "Guest",
					blacklist: "",
					guesttypeid: "",
					Note: "",
					CheckInDate: CheckIn,
					CheckOutDate: CheckOut,
					roomtype: sampleRoom.RoomTypeId,
					ratetype: sampleRoom.RoomTypeId,
					AdultNo: Adult,
					ChildNo: Kids,
					Rate: sampleRoom.Price,
					paid_amount: "",
					reservetype: "",
					BookingSource: "",
					BusinessSource: "",
					AgentId: 1,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			window.location.href = "/";
		} catch (err) {
			console.log(`Error fetching data: ${err}`);
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[600px] flex flex-col">
				<div className="bg-white p-12 rounded">
					<button className="flex items-center gap-x-2 pointer" onClick={handleClose}>
						<div className="text-accent">
							<BsArrowBarLeft className="text-[30px]" />
						</div>
						<h2>Back</h2>
					</button>
					<div className="text-center">
						<h2 className="text-accent">Summary of booking</h2>
					</div>

					<div className="flex flex-col gap-1 p-10">
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">Room Name </p>
							<h2 className="">{sampleRoom.RoomTypeName}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">CheckIn </p>
							<h2 className="">{CheckIn.toLocaleString(undefined, dateOptions)}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">CheckOut</p>
							<h2 className="">{CheckOut.toLocaleString(undefined, dateOptions)}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">Price</p>

							<h2 className="">₦ {(Math.ceil((CheckOut - CheckIn) / MILLISECONDS_IN_A_DAY) * (sampleRoom?.Price || sampleRoom.Price)).toLocaleString()}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">Number of Guest</p>

							<h2 className="">{TotalGuest}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">Name</p>
							<h2 className="">{Name}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">Email</p>
							<h2 className="">{Email}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">Phone</p>
							<h2 className="">{Phone}</h2>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-zinc-500 font-bold my-1">Address</p>
							<h2 className="">{Address}</h2>
						</div>
					</div>
					<div className="text-center text-gray-600">
						<h5>Terms and condition</h5>
						<p>Book and hold secure a room but Payment only guarantee booking </p>
					</div>

					<div className="flex justify-between items-center gap-5 mt-5">
						{/* <button className="btn btn-lg btn-primary mx-auto">Cancel</button> */}
						<button className="btn btn-lg btn-primary mx-auto" onClick={BookRoom}>
							Book and hold
						</button>
						<button className="btn btn-lg btn-primary mx-auto">Pay Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreviewBooking;
