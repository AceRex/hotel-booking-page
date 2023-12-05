import React from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Initialize from "./useInitialize";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
    const { getTokenDetails } = Initialize();

    useEffect(() => {
		getTokenDetails();
    }, []);
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
