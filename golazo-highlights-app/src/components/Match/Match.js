import React from 'react';
import './Match.css';
import { Link } from 'react-router-dom';

function Match({ match }) {
	return (
		<>
		<Link to={`/recent/${match.title}`}>
		<div className='selection'>
			<img className='img' src={match.thumbnail} alt={match.title} />
			<div className='game'>
				<p key={match.title}>{match.title}</p>
				<p>{match.competition}</p>
				<p>{match.date}</p>
			</div>
		</div>
		</Link>
		</>
	);
}

export default Match;
