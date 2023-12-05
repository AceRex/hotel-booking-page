import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import { FaCat, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomDetails = () => {
	const Data = useSelector((state) => state.room.previewedRoom);
	console.log(Data);

	return (
		<section className="">
			{/* {Data.map((items) => console.log(items))} */}
			<div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
				<div className="absolute w-full h-full bg-black/75">
					<h1 className="text-6xl text-white z-20 font-primary text-center sm:mt-52"> {Data.RoomTypeName} Details</h1>
				</div>
			</div>

			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row h-full py-24">
					<div className="w-full h-full lg:w-[60%] px-6">
						<h2 className="h2">{Data.RoomTypeName}</h2>
						<p className="mb-8">{Data.description}</p>

						<img className="mb-8" src={Data.GalleryImage1} alt="house" />

						{/* <div className="mt-12">
							<h3 className="h3 mb-3">Room Facilities</h3>
							<p className="mb-12">
								<div className="grid grid-cols-3 gap-6 mb-12">
									{facilities.map((item, index) => {
										const { name, icon } = item;
										return (
											<div className="flex items-center gap-x-3 flex-1" key={index}>
												<div className="text-3xl text-accent ">{icon}</div>
												<div className="text-base text-accent ">{name}</div>
											</div>
										);
									})}
								</div>
							</p>
						</div> */}
					</div>
					<div className="w-full h-full lg:w-[40%]">
						<div className=" py-8 px-6 bg-accent/20 mb-12 ">
							<div className="flex flex-col space-y-4 mb-4">
								<h3>Your Reservation</h3>

								<div className="h-[60px]">
									<CheckIn />
								</div>
								<div className="h-[60px]">
									<CheckOut />
								</div>
								<div className="h-[60px]">
									<AdultsDropdown />
								</div>
								<div className="h-[60px]">
									<KidsDropdown />
								</div>

								<Link to={`/room/${Data.RoomNo}/booknow`} className="btn btn-lg btn-primary w-full max-w-[300px] mx-auto">
									Book now from ₦{}
								</Link>
							</div>
						</div>

						<div className="">
							<h3 className="h3">Hotel rules</h3>
							<p className="mb-6">Kindly Obey the rules in order to avoid embassrement </p>

							<ul className="flex flex-col gap-y-4">
								<li className="flex items-center gap-x-4">
									<FaCheck className="text-accent" />
									Check-in: 3:00pm - 9:00pm
								</li>
								<li className="flex items-center gap-x-4">
									<FaCheck className="text-accent" />
									Check-out: 10:30am
								</li>
								<li className="flex items-center gap-x-4">
									<FaCat className="text-accent" />
									No Pet
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RoomDetails;
