import React, { Suspense } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Initialize from "./useInitialize";
import AppRoutes from "./router.jsx";

const App = () => {
  const { getTokenDetails } = Initialize();

  useEffect(() => {
    getTokenDetails();
  }, [getTokenDetails]);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
