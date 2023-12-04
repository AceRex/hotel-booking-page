import { createSlice } from "@reduxjs/toolkit";

const RoomSlice = createSlice({
	name: "room",
	initialState: {
		data: [],
		loading: true,
		id: "",
		roomid: "",
		name: "",
		searchTerm: "",
		currentPage: 1,
		branch: "",
		menu: "",
		adult: "1 Adult",
		kid: "0 kids",
		checkIn: "",
		checkOut: "",
	},
	reducers: {
		setId: (state, action) => {
			state.id = action.payload;
		},
		setName: (state, action) => {
			state.name = action.payload;
		},
		setData: (state, action) => {
			state.data = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setBranch: (state, action) => {
			state.branch = action.payload;
		},
		setMenu: (state, action) => {
			state.menu = action.payload;
		},
		setAdult: (state, action) => {
			state.adult = action.payload;
		},
		setKids: (state, action) => {
			state.kid = action.payload;
		},
		setCheckIn: (state, action) => {
			state.checkIn = action.payload;
		},
		setCheckOut: (state, action) => {
			state.checkOut = action.payload;
		},
	},
});

export const RoomActions = RoomSlice.actions;

export default RoomSlice;
