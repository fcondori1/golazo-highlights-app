import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Match from '../Match/Match';

function Recent(props) {
	const [matches, setMatches] = useState([]);
	useEffect(() => {
		axios
			.get('https://www.scorebat.com/video-api/v3/')
			.then((res) => setMatches(res.data.response));
	}, []);
	console.log(matches);
	return (
		<div className='list'>
			<h2>Recent Matches</h2>
			<div className='list-match'>
				{matches.map((match) => {
					return <Match match={match} key={match.title} />;
				})}
			</div>
		</div>
	);
}

export default Recent;
