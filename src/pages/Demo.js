import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";
import { Link } from "react-router-dom";
import { RoomActions } from "../Redux/Slice/RoomSlice";
import BookForm from "../pages/BookNow";

import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = () => {
	const dispatch = useDispatch();
	const Loading = useSelector((state) => state.room.loading);
	const Data = useSelector((state) => state.room.data);
	const PreviewItem = useSelector((state) => state.room.previewItem);
	// console.log(Data);

	const handlePreviewItem = (item) => {
		dispatch(RoomActions.setPreviewItem(!PreviewItem));
		dispatch(RoomActions.setPreviewedRoom(item));
	};

	return (
		<>
			<section className="py-24">
				{Loading && (
					<div
						className="h-screen fixed bottom-0 top-0 bg/black/90 w-full z-50 flex
				justify-center items-center"
					>
						<SpinnerDotted color="white" />
					</div>
				)}
				<div className="container mx-auto lg:px:0">
					<div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
						{Data.map((room, index) => (
							<div className="bg-red shadow-2xl min-h-[500px] group">
								<div className="overflow-hidden">
									<img className="group-hover:scale-110 transition-all duration-300 w-full" src={room.DefaultImage} alt="room images" />
								</div>

								{/* DETAILS */}
								<div className="bg-white shadow-lg max-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
									<div className="flex justify-between w-[80%]">
										<div className="flex items-center gap-x-2 ">
											<div className="text-accent">
												<BsArrowsFullscreen className="text-[15px]" />
											</div>
											<div className="flex gap-x-1">
												<div> Size</div>
												<div>{room.Areasize} m2</div>
											</div>
										</div>

										<div className="flex items-center gap-x-2 ">
											<div className="text-accent">
												<BsPeople className="text-[15px]" />
											</div>
											<div className="flex gap-x-1">
												<div> Max People </div>
												<div>{room.AdultNo + room.ChildNo}</div>
											</div>
										</div>
									</div>
								</div>

								<div className="text-center">
									<h3 className="h3">{room.RoomTypeName}</h3>

									<p className="max-w-[300px] mx-auto mb-3 lg:mb-6 ">{room.ShortDescripition}</p>
								</div>

								<a
									href={`/room/:${room.RoomNo}`}
									className="btn btn-secondary btn-sm max-w-[300px] mx-auto"
									onClick={() => handlePreviewItem(room)}
									data-bs-toggle="tooltip"
									data-bs-placement="left"
									title="Edit Customer Details"
								>
									Book now from ₦{room.price}
								</a>

								{/* <Link to={`/room/:${room.RoomNo}`} className="btn btn-secondary btn-sm max-w-[300px] mx-auto">
									Book now from ₦
								</Link> */}
							</div>
						))}
					</div>
				</div>
			</section>
			{PreviewItem ? <BookForm handleClose={handlePreviewItem} /> : null}
		</>
	);
};

export default Room;
