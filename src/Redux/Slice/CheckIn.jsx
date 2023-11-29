import { createSlice } from "@reduxjs/toolkit";

const CheckInSlice = createSlice({
	name: "check",
	initialState: {
		data: [],
		loading: true,
		checkIn: "",
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setCheckIn: (state, action) => {
			state.checkIn = action.payload;
		},
	},
});

export const CheckInActions = CheckInSlice.actions;

export default CheckInSlice;
