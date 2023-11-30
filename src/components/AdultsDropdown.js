import React from "react";

//headless ui menu

import { Menu } from "@headlessui/react";

import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AdultActions } from "../Redux/Slice/AdultSlice";
const AdultsDropdown = () => {
	// const { adults, setAdults } = useContext(RoomContext);
	const adults = useSelector((state) => state.adult.adult);
	const lis = [{ name: "1 Adult" }, { name: "2 Adults" }, { name: "3 Adults" }, { name: "4 Adults" }];
	const dispatch = useDispatch();
	return (
		<Menu as="div" className="w-full h-full bg-white relative">
			<Menu.Button className="w-full h-full flex items-center justify-between px-8">
				{adults}
				<BsChevronDown className="text-base text-accent-hover" />
			</Menu.Button>

			<Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
				{lis.map((li, index) => {
					return (
						<Menu.Item
							onClick={() => dispatch(AdultActions.setAdult)}
							as="li"
							className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
							key={index}
						>
							{li.name}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};

export default AdultsDropdown;
