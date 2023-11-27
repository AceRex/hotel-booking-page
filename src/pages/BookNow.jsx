import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { RoomContext } from "../context/RoomContext";

import { FaCat, FaCheck, FaSmokingBan } from "react-icons/fa";

import ScrollToTop from "../components/ScrollToTop";

const RoomDetails = () => {
	const { rooms, adults, kids } = useContext(RoomContext);
	const { id } = useParams();

	const room = rooms.find((room) => {
		return room.id === Number(id);
	});
	console.log(room);

	const { name, description, imageLg, price, checkIn, checkOut, adult } = room;
	return (
		<section className="">
			<div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
				<div className="absolute w-full h-full bg-black/75">
					<h1 className="text-6xl text-white z-20 font-primary text-center sm:mt-52"> {name} Details</h1>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row h-full py-24 gap-6">
					<div className="w-full h-full lg:w-[30%] px-6 bg-accent/20 py-4">
						<div className="flex flex-col">
							<p className="bg-gray/20">CheckIn </p>
							<h2 className="h4">{checkIn}</h2>
							<p className="bg-gray/20"> from 12:00:00pm</p>
						</div>

						<div className="flex flex-col">
							<p className="bg-gray/20">CheckOut </p>
							<h2 className="h4">{checkOut}</h2>
							<p className="bg-gray/20"> Until 10:00:00am</p>
						</div>
						<div className="flex justify-between items-center mt-5">
							<h2 className="">{name}</h2>
							<h2 className="">₦{price.toLocaleString()}</h2>
						</div>
						<div className="flex justify-between items-center mt-5">
							<h2 className="">Adult</h2>
							<h2 className="">{adults}</h2>
						</div>
						<div className="flex justify-between items-center mt-5">
							<h2 className="">Kids</h2>
							<h2 className="">{kids}</h2>
						</div>
					</div>
					<div className="w-full h-full lg:w-[60%]">
						<div className=" py-8 px-6 bg-accent/20 mb-12 ">
							<div className="flex flex-col space-y-4 mb-4">
								<h3>Enter your details</h3>
								<div className="flex gap-6 h-full">
									<div className="w-full h-full flex flex-col ">
										<h2>FirstName</h2>
										<input type="text" placeholder="John" className="p-4" required />
									</div>
									<div className="w-full h-full flex flex-col ">
										<h2>LastName</h2>
										<input type="text" placeholder="Doe" className="p-4" required />
									</div>
								</div>
								<div className="flex gap-6 h-full">
									<div className="w-full h-full flex flex-col ">
										<h2>Email</h2>
										<input type="email" placeholder="johndoe@email.com" className="p-4" required />
									</div>
									<div className="w-full h-full flex flex-col ">
										<h2>Phone number</h2>
										<input type="tel" placeholder="+2348848493" className="p-4" required />
									</div>
								</div>
								<div className="flex gap-6 h-full">
									<div className="w-full h-full flex flex-col ">
										<h2>Address</h2>
										<textarea type="text" placeholder="7, opebi street " className="p-4" required />
									</div>
									{/* <div className="w-full h-full flex flex-col ">
										<h2>Phone number</h2>
										<input type="tel" placeholder="+2348848493" className="p-4" required />
									</div> */}
								</div>

								<button className="btn btn-lg btn-primary w-full">Book now for ₦{price.toLocaleString()}</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RoomDetails;
