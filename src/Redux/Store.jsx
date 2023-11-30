import { configureStore } from "@reduxjs/toolkit";

import RoomSlice from "./Slice/RoomSlice";
import CheckInSlice from "./Slice/CheckIn";
import CheckOutSlice from "./Slice/CheckOut";
import AdultSlice from "./Slice/AdultSlice";
import KidSlice from "./Slice/KidSlice";

const store = configureStore({
	reducer: {
		room: RoomSlice.reducer,
		check: CheckInSlice.reducer,
		checkout: CheckOutSlice.reducer,
		adult: AdultSlice.reducer,
		kid: KidSlice.reducer,
	},
});

export default store;
