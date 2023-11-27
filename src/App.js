import React from "react";

///Components
import Header from "./components/Header";
import Footer from "./components/Footer";

///Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import BookNow from "./pages/BookNow";

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
	return (
		<div>
			<Header />
			<RouterProvider router={router} />
			{/* <Footer /> */}
		</div>
	);
};

export default App;
