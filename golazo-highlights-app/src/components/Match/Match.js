import React from 'react';
import './Match.css';
import { Link } from 'react-router-dom';

function Match({ match }) {
	return (
		<>
			{/* <Link to={`/recent/${match.title}`}> */}
				<div className='selection'>
					<a href={match.matchviewUrl} target='_blank' rel='noreferrer'>
						<img className='img' src={match.thumbnail} alt={match.title} />
						<div className='game'>
							<p className='title' key={match.title}>{match.title}</p>
							<p className='league'>{match.competition}</p>
							{/* <p>{match.date}</p> */}
						</div>
					</a>
				</div>
			{/* </Link> */}
		</>
	);
}

export default Match;
