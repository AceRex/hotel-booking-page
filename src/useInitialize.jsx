import axios from "axios";
import { useDispatch } from "react-redux";

import { RoomActions } from "./Redux/Slice/RoomSlice";

const useInitialize = () => {
	const dispatch = useDispatch();

	const getRooms = async () => {
		dispatch(RoomActions.setLoading(true));
		try {
			const response = await axios.get(`${process.env.REACT_APP_ROOMS}`, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION}`,
				},
			});
			// console.log(response.data.roomsInfo);
			dispatch(RoomActions.setData(response.data.roomsInfo));
			dispatch(RoomActions.setLoading(false));
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return { getRooms };
};

export default useInitialize;
