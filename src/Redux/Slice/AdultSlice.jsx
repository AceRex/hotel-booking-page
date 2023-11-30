import { createSlice } from "@reduxjs/toolkit";

const AdultSlice = createSlice({
	name: "adult",
	initialState: {
		data: [],
		loading: true,
		adult: "1 Adult",
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setAdult: (state, action) => {
			state.adult = action.payload;
		},
	},
});

export const AdultActions = AdultSlice.actions;

export default AdultSlice;
