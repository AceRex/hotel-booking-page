import { createContext, useEffect, useState } from "react";
import { roomData } from "./../data";

export const RoomContext = createContext();
const RoomProvider = ({ children }) => {
	const [rooms, setRooms] = useState(roomData);
	const [adults, setAdults] = useState("1 Adult");
	const [kids, setKids] = useState("0 kids");
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(false);
	// console.log(formattedDate);

	useEffect(() => {
		setTotal(Number(adults[0]) + Number(kids[0]));
	}, [adults, kids]);

	const handleClick = (e) => {
		setLoading(true);
		e.preventDefault();

		///fiter rooms based on total (person)
		const newRooms = roomData.filter((room) => {
			return total <= room.maxPerson;
		});

		setTimeout(() => {
			setRooms(newRooms);
			setLoading(false);
		}, 3000);
	};

	return <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}>{children}</RoomContext.Provider>;
};

export default RoomProvider;
