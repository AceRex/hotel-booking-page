import React from "react";
import { useEffect } from "react";

///Components
import Header from "./components/Header";

///Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import BookNow from "./pages/BookNow";

import Initialize from "./useInitialize";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/room/:id",
		element: <RoomDetails />,
	},
	{
		path: "/room/:id/booknow",
		element: <BookNow />,
	},
]);
const App = () => {
	const getRooms = Initialize();

	useEffect(() => {
		getRooms();
	}, []);
	return (
		<div>
			<Header />
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
