import { configureStore } from "@reduxjs/toolkit";

import RoomSlice from "./Slice/RoomSlice";
import CompanySlice from "./Slice/Company_dtl";

const store = configureStore({
  reducer: {
    room: RoomSlice.reducer,
    company: CompanySlice.reducer,
  },

});

export default store;
