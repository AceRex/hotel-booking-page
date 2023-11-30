import { createSlice } from "@reduxjs/toolkit";

const KidSlice = createSlice({
	name: "kids",
	initialState: {
		data: [],
		loading: true,
		kids: "",
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setKids: (state, action) => {
			state.kids = action.payload;
		},
	},
});

export const KidActions = KidSlice.actions;

export default KidSlice;
