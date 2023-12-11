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
		allRoom: [],
		currentPage: 1,
		branch: "",
		menu: "",
		adult: "1 Adult",
		kid: "0 kids",
		checkIn: "",
		checkOut: "",
		firstname: "",
		lastname: "",
		email: "",
		address: "",
		phone: "",
		previewItem: "",
		previewedRoom: "",
		total: 0,
		category: [],
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
		setKid: (state, action) => {
			state.kid = action.payload;
		},
		setCheckIn: (state, action) => {
			state.checkIn = action.payload;
		},
		setCheckOut: (state, action) => {
			state.checkOut = action.payload;
		},
		setFirstName: (state, action) => {
			state.firstname = action.payload;
		},
		setLastName: (state, action) => {
			state.lastname = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setAddress: (state, action) => {
			state.address = action.payload;
		},
		setPhone: (state, action) => {
			state.phone = action.payload;
		},
		setPreviewItem: (state, action) => {
			state.previewItem = action.payload;
		},
		setPreviewedRoom: (state, action) => {
			state.previewedRoom = action.payload;
		},
		setTotal: (state, action) => {
			state.total = action.payload;
		},
		setAllRooms: (state, action) => {
			state.allRoom = action.payload;
		},
		setCategory: (state, action) => {
			state.allRoom = action.payload;
		},
	},
});

export const RoomActions = RoomSlice.actions;

export default RoomSlice;
