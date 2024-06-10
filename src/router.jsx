import React from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const BookNow = React.lazy(() => import("./pages/BookNow"));
const RoomDetails = React.lazy(() => import("./pages/RoomDetails"));

const router = createBrowserRouter([
  {
    path: "/online-booking",
    element: <Home />,
  },
  {
    path: "/:RoomTypeName",
    element: <RoomDetails />,
  },
  {
    path: "/:RoomTypeName/booknow",
    element: <BookNow />,
  },
]);

export default router;
