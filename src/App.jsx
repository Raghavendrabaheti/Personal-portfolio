import React from "react";
import Routes from "./Router.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes />
      <Footer />
    </div>
  );
};

export default App;