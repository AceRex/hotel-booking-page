import { configureStore } from "@reduxjs/toolkit";

import RoomSlice from "./Slice/RoomSlice";

const store = configureStore({
	reducer: {
		room: RoomSlice.reducer,
	},
});

export default store;
