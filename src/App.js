import "./index";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Design from "./components/Design";
import Theory from "./components/Theory";
import Art from "./components/Art";
import Footer from "./components/Footer";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<React.Fragment>
				<Navbar />
			</React.Fragment>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/Design" element={<Design />}></Route>
        <Route path="/Theory" element={<Theory />}></Route>
        <Route path="/Art" element={<Art />}></Route>
			</Routes>
			<Footer/>
		</>
	);
}

export default App;