// import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Recent from './components/Recent/Recent';
import About from './components/About/About';
import Main from './components/Main/Main';

import './App.css';

function App() {
	return (
		<div className='body'>
		<Router>
			<header>
				<Header />
			</header>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/recent' element={<Recent />} />
			</Routes>
		</Router>
		</div>
	);
}

export default App;
