import { useDispatch, useSelector } from "react-redux";
import { RoomActions } from "../Redux/Slice/RoomSlice";
const AdultsDropdown = () => {
	const adults = useSelector((state) => state.room.adult);
	const lis = [{ name: "1 Adult" }, { name: "2 Adults" }, { name: "3 Adults" }, { name: "4 Adults" }];
	const dispatch = useDispatch();
	return (
		<div className="w-full h-full bg-white relative flex items-center justify-between">
			<select name={adults} onChange={(e) => dispatch(RoomActions.setAdult(e.target.value))} className="bg-white absolute w-[95%] px-5 flex flex-col border-none">
				{lis.map(({ id, name }, index) => (
					<option key={index} value={name} className="border-none h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer">
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

export default AdultsDropdown;

// <Menu as="div" className="w-full h-full bg-white relative">
// 	<Menu.Button className="w-full h-full flex items-center justify-between px-8">
// 		{adults}
// 		<BsChevronDown className="text-base text-accent-hover" />
// 	</Menu.Button>

// 	<Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
// 		{lis.map((li, index) => {
// 			return (
// 				<Menu.Item
// 					onClick={() => dispatch(AdultActions.setAdult)}
// 					as="li"
// 					className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
// 					key={index}
// 				>
// 					{li.name}
// 				</Menu.Item>
// 			);
// 		})}
// 	</Menu.Items>
// </Menu>
