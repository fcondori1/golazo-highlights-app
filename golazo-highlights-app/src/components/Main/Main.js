import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css'

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
			<p>Welcome to the Golazo(Goal) App!</p>
			<p>Go to Recent Matches to see the lates games of the week and wait for updates to come for a better watching experience!</p>
			<div className='stadium'></div>
		</div>
	);
}

export default Main;
