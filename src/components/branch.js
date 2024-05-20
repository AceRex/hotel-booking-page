import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RoomActions } from "../Redux/Slice/RoomSlice";
const Branch = () => {
	const branch = useSelector((state) => state.room.branch);
	const branchList = useSelector((state) => state.room.branchList);
	console.log(branch);

	const dispatch = useDispatch();

	return (
		<div className="w-full h-full bg-white relative flex items-center justify-between">
			<select name={branch} onChange={(e) => dispatch(RoomActions.setBranch(e.target.value))} className="bg-white absolute w-[95%] m-auto flex flex-col border-none px-5">
				{branchList.map(({ id, name }) => (
					<option key={id} value={name} className="border-none h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer">
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Branch;
