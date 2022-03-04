import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clip from '../Clip/Clip'

function MatchDetails(props) {
	const [matches, setMatches] = useState([]);
	useEffect(() => {
		axios
			.get('https://www.scorebat.com/video-api/v3/')
			.then((res) => setMatches(res.data.response));
	}, []);
	return (
		<div className='list'>
			<h2>MatchDetails Matches</h2>
			<div>
				{matches.map((match) => {
					return <Clip match={match} key={match.title} />;
				})}
			</div>
		</div>
	);
}

export default MatchDetails;
