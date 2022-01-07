// import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Recent from './components/Recent/Recent';
import About from './components/About/About';

import './App.css';

function App() {
	return (
		<Router>
			<header>
				<Header />
			</header>
				<Routes>
					Hello World!
					<Route path='/about' element={<About />} />
					<Route path='/recent' element={<Recent />} />
				</Routes>
		</Router>
	);
}

export default App;
