import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import BookNow from "./pages/BookNow";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/room/:RoomTypeName",
		element: <RoomDetails />,
	},
	{
		path: "/room/:id/booknow",
		element: <BookNow />,
	},
]);

export default router;
