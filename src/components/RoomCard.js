import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Img3 from "../assets/img/heroSlider/3.jpg";
import { useEffect, useState } from "react";

// https://cranesoft-app.s3.eu-central-1.amazonaws.com/uploads/tenant/588dff5a-1817-4925-98bd-0de192796cb0/rooms/presidential_gallery1.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUIJF4267JWWNIUUR%2F20240523%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240523T092624Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=af173e6699c902754f2ded01736fb1921753d14fac80d00b8b61aeebd0b53002
// https://cranesoft-app.s3.eu-central-1.amazonaws.com/uploads/tenant/588dff5a-1817-4925-98bd-0de192796cb0/rooms/roomimage.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUIJF4267JWWNIUUR%2F20240523%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240523T101104Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc565eee85c78ab0e9d541a457acf76e8e85bbb1e696e23dbbda74f37f1a6e57
const RoomCard = () => {
	const Data = useSelector((state) => state.room.data);
	const baseUrl = useSelector((state) => state.company.baseUrl);
	const tenant_id = useSelector((state) => state.company.m_id);
	const [categorys, setCategorys] = useState([]);
	const imgURL = `${baseUrl}/storage/uploads/tenant/${tenant_id}/rooms/`;
	// console.log(JSON.parse(categorys[1]?.GalleryImage1));

	// https://demo.cranesoftapp.com/storage/uploads/tenant/588dff5a-1817-4925-98bd-0de192796cb0/rooms/deluxe_gallery1.png

	useEffect(() => {
		const array = [];
		const roomCat = {};
		for (const room of Data) {
			if (!roomCat[room.RoomTypeName]) {
				roomCat[room.RoomTypeName] = true;
				array.push(room);
			}
		}
		setCategorys(array);
	}, [Data]);

	return (
		<div className="container mx-auto lg:px:0">
			<div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
				{categorys.map((room) => (
					<div className="bg-red shadow-2xl min-h-[500px] group">
						<div className="overflow-hidden">
							<img className="group-hover:scale-110 transition-all duration-300 w-full" src={room.DefaultImage ? imgURL + room.DefaultImage : Img3} alt="room images" />
						</div>

						{/* DETAILS */}
						<div className="bg-white shadow-lg max-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
							<div className="flex justify-between w-[80%]">
								<div className="flex items-center gap-x-2 ">
									<div className="text-accent">
										<BsArrowsFullscreen className="text-[15px]" />
									</div>
									<div className="flex gap-x-1">
										<div> Bed</div>
										<div> {room.NoOfBed}</div>
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

							<p className="max-w-[300px] mx-auto mb-3 lg:mb-6 ">{room.ShortDescription}</p>
						</div>

						<Link to={`/room/${room.RoomTypeName}`} className="btn btn-secondary btn-sm max-w-[500px] mx-auto">
							Book Deluxe from ₦ {room.Price.toLocaleString()}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default RoomCard;
