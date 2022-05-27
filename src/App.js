import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/scss/style.scss';
import { Home } from "./app/home";
import { Pollution } from "./app/pollution";
import { Navbar } from "./app/navbar";
import Unsplash from 'unsplash-js';



export const unsplash = new Unsplash({
	accessKey: `${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
});

function App() {
	return (
		<BrowserRouter>
        <Navbar />
        <Routes>
		  <Route path="/" element={<Home />} />
          <Route path="weather" element={<Home />} />
          <Route path="pollution" element={<Pollution />} />
        </Routes>
      </BrowserRouter>
	);
}

export default App;
