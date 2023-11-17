import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import BrowsePage from "./Pages/BrowsePage"
import LandingPage from "./Pages/LandingPage"
import Header from "./Components/Header"

function App() {
	return (
		<div className="App">
            <Header />
			<Routes>
                <Route exact path="/browse" element={<BrowsePage />} />
                <Route exact path="/" element={<LandingPage />} />
            </Routes>
		</div>
	)
}

export default App
