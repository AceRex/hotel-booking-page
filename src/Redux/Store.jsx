import { configureStore } from "@reduxjs/toolkit";

import RoomSlice from "./Slice/RoomSlice";
import CheckInSlice from "./Slice/CheckIn";
import CheckOutSlice from "./Slice/CheckOut";

const store = configureStore({
	reducer: {
		room: RoomSlice.reducer,
		check: CheckInSlice.reducer,
		checkOut: CheckOutSlice.reducer,
	},
});

export default store;
