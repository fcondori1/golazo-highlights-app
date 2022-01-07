import React from 'react';
import './Match.css';

function Match({ match }) {
	return (
		<div className='selection'>
			<img className='img' src={match.thumbnail} alt={match.title} />
			<div className='game'>
				<p key={match.title}>{match.title}</p>
			</div>
		</div>
	);
}

export default Match;
