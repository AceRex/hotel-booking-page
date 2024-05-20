import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RoomActions } from "./../Redux/Slice/RoomSlice";
import PreviewBooking from "./PreviewBooking";

const RoomDetails = () => {
	const { RoomTypeName } = useParams();

	const sampleRoom = useSelector((state) => state.room.sampleRoom);

	const dispatch = useDispatch();
	const Data = useSelector((state) => state.room.data);

	const CheckIn = useSelector((state) => state.room.checkIn);
	const CheckOut = useSelector((state) => state.room.checkOut);
	const Adult = useSelector((state) => state.room.adult);
	const Kids = useSelector((state) => state.room.kid);
	const Branch = useSelector((state) => state.room.branch);
	const FirstName = useSelector((state) => state.room.firstname);
	const LastName = useSelector((state) => state.room.lastname);
	const Email = useSelector((state) => state.room.email);
	const Address = useSelector((state) => state.room.address);
	const Phone = useSelector((state) => state.room.phone);

	const previewItem = useSelector((state) => state.room.previewItem);

	const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

	useEffect(() => {
		const array = Data.filter((room) => room.RoomTypeName === RoomTypeName);
		dispatch(RoomActions.setCategory(array));
		dispatch(RoomActions.setSampleRoom(array.length > 0 ? array[0] : null));
	}, [Data, RoomTypeName, dispatch]);

	const dateOptions = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	};
	// const RoomId = sampleRoom.RoomTypeId;
	// console.log(RoomId);

	const handlePreviewItem = (item) => {
		dispatch(RoomActions.setPreviewItem(!previewItem));
		dispatch(RoomActions.setPreviewedRoom(item));
	};

	return (
		<section className="">
			{sampleRoom ? (
				<>
					<div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
						<div className="absolute w-full h-full bg-black/75">
							<h1 className="text-6xl text-white z-20 font-primary text-center mt-52"> {RoomTypeName} Details</h1>
						</div>
					</div>
					{previewItem ? <PreviewBooking handleClose={handlePreviewItem} /> : null}
					<div className="container mx-auto">
						<div className="flex flex-col lg:flex-row h-full py-24 gap-6">
							<div className="w-full h-full lg:w-[30%] px-6 bg-accent/20 py-4">
								<div className="flex flex-col gap-1">
									<div className="flex justify-between items-center">
										<p className="text-zinc-500">Room Name </p>
										<h2 className="">{RoomTypeName}</h2>
									</div>
								</div>
								<div className="flex flex-col gap-1">
									<div className="flex justify-between items-center">
										<p className="text-zinc-500">CheckIn </p>
										<h2 className="">{CheckIn.toLocaleString(undefined, dateOptions)}</h2>
									</div>
									<p className="text-zinc-500"> from 12:00:00pm</p>
								</div>

								<div className="flex flex-col mt-3">
									<div className="flex justify-between items-center">
										<p className="text-zinc-500">CheckOut </p>
										<h2 className="">{CheckOut.toLocaleString(undefined, dateOptions)}</h2>
									</div>

									<p className="text-zinc-500"> Until 10:00:00am</p>
								</div>
								<div className="flex justify-between items-center mt-5">
									<h2 className="">Adult</h2>
									<h2 className="">{Adult}</h2>
								</div>
								<div className="flex justify-between items-center mt-5">
									<h2 className="">Kids</h2>
									<h2 className="">{Kids}</h2>
								</div>
								<div className="flex justify-between items-center mt-5">
									<h2 className="">Branch</h2>
									<h2 className="">{Branch}</h2>
								</div>
							</div>
							<div className="w-full h-full lg:w-[60%]">
								<div className=" py-8 px-6 bg-accent/20 mb-12 ">
									<div className="flex flex-col space-y-4 mb-4">
										<h3>Enter your details</h3>
										<div className="flex flex-col sm:flex-row gap-6 h-full">
											<div className="w-full h-full flex flex-col gap-2">
												<h2>FirstName</h2>
												<input
													type="text"
													placeholder="John"
													value={FirstName}
													onChange={(e) => dispatch(RoomActions.setFirstName(e.target.value))}
													className="p-4 placeholder-gray-500 placeholder-opacity-50"
													required
												/>
											</div>
											<div className="w-full h-full flex flex-col gap-2">
												<h2>LastName</h2>
												<input
													type="text"
													placeholder="Doe"
													value={LastName}
													onChange={(e) => dispatch(RoomActions.setLastName(e.target.value))}
													className="p-4 placeholder-gray-500 placeholder-opacity-50"
													required
												/>
											</div>
										</div>
										<div className="flex flex-col sm:flex-row gap-6 h-full">
											<div className="w-full h-full flex flex-col gap-2">
												<h2>Email</h2>
												<input
													type="email"
													placeholder="johndoe@email.com"
													value={Email}
													onChange={(e) => dispatch(RoomActions.setEmail(e.target.value))}
													className="p-4 placeholder-gray-500 placeholder-opacity-50"
													required
												/>
											</div>
											<div className="w-full h-full flex flex-col gap-2 ">
												<h2>Phone number</h2>
												<input
													type="tel"
													placeholder="+2348848493"
													value={Phone}
													onChange={(e) => dispatch(RoomActions.setPhone(e.target.value))}
													className="p-4 placeholder-gray-500 placeholder-opacity-50"
													required
												/>
											</div>
										</div>
										<div className="flex gap-6 h-full">
											<div className="w-full h-full flex flex-col gap-2">
												<h2>Address</h2>
												<textarea
													type="text"
													placeholder="7, opebi street "
													value={Address}
													onChange={(e) => dispatch(RoomActions.setAddress(e.target.value))}
													className="p-4 placeholder-gray-500 placeholder-opacity-50"
													required
												/>
											</div>
										</div>

										{/* <button className="btn btn-lg btn-primary w-full " onClick={BookRoom}>
											Book now for ₦ {(Math.ceil((CheckOut - CheckIn) / MILLISECONDS_IN_A_DAY) * (sampleRoom?.Price || sampleRoom.Price)).toLocaleString()}
										</button> */}
										<button href="#" className="btn btn-lg btn-primary w-full cursor-pointer" onClick={() => handlePreviewItem(sampleRoom)}>
											Book now for ₦ {(Math.ceil((CheckOut - CheckIn) / MILLISECONDS_IN_A_DAY) * (sampleRoom?.Price || sampleRoom.Price)).toLocaleString()}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div>Loading</div>
			)}
		</section>
	);
};

export default RoomDetails;
