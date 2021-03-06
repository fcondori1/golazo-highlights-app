import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Recent from './components/Recent/Recent';
import About from './components/About/About';
import Main from './components/Main/Main';


import './App.css';

function App() {
	return (
		<div className='container'>
			<header className='head'>
				<Header />
			</header>
			<div className='color-left'></div>
			<div className='color-right'></div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/recent' element={<Recent />} />
			</Routes>
		</div>
	);
}

export default App;

{/* <Route path='/recent/:title' element={<MatchDetails />} /> */}