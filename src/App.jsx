import React from "react";
import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
	return (
		<div>
			<Header />
      <div className="main">
        <div className="container grid md:grid-cols-3 gap-5 mx-auto">
          <Home />
          <SideCart />
        </div>
      </div>
			<Details />
		</div>
	);
};

export default App;
