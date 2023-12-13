import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RoomProvider from "./context/RoomContext";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		{/* <RoomProvider> */}
			<React.StrictMode>
				<App />
			</React.StrictMode>
		{/* </RoomProvider> */}
	</Provider>
);
