import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.css';
import 'animate.css';

function Main(props) {
	const [matches, setMatches] = useState([]);
	useEffect(() => {
		axios
			.get('https://www.scorebat.com/video-api/v3/')
			.then((res) => setMatches(res.data.response));
	}, []);
	// function getRandomGame(e) {
	// 	return Math.floor(Math.random() * matches.response.length);
	// }
	return (
		<div className='page'>
			<p className='animate__animated animate__backInLeft'>
				Welcome to the Golazo(Goal) App!
			</p>
			<p className='animate__animated animate__backInRight'>
				Click below to see the latest games of the week!
			</p>
			<Link to='/recent'>
				<div className='stadium animate__animated animate__pulse animate__infinite'>Matches</div>
			</Link>
		</div>
	);
}

export default Main;
