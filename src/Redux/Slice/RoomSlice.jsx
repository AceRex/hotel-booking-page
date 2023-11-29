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
	},
});

export const RoomActions = RoomSlice.actions;

export default RoomSlice;
