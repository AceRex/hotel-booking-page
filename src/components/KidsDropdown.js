import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RoomActions } from "../Redux/Slice/RoomSlice";
const KidsDropdown = () => {
	const lis = [{ name: "1 kid" }, { name: "2 kids" }, { name: "3 Kids" }, { name: "4 kids" }];
	const kids = useSelector((state) => state.room.kid);
	const dispatch = useDispatch();

	return (
		<div className="w-full h-full bg-white relative flex items-center justify-between">
			<select name={kids} onChange={(e) => dispatch(RoomActions.setKids(e.target.value))} className="bg-white absolute w-full flex flex-col z-40 border-none">
				{lis.map(({ id, name }) => (
					<option key={id} value={name} className="border-none h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer">
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

export default KidsDropdown;
