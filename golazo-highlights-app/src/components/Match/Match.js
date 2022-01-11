import React from 'react';
import './Match.css';
import { Link } from 'react-router-dom';

function Match({ match }) {
	return (
		<>
			{/* <Link to={`/recent/${match.title}`}> */}
			<div className='selection'>
				<a
					href={match.matchviewUrl}
					target='_blank'
					rel='noreferrer'
					className='card'>
					<img className='img' src={match.thumbnail} alt={match.title} />
					<div className='game'>
						<p className='title' key={match.title}>
							{match.title}
						</p>
						<div className='standing'>
							<p className='league'>{match.competition}</p>
							<a
								href={match.competitionUrl}
								target='_blank'
								rel='noreferrer'
								className='currentStand'>
								Standings
							</a>
						</div>
						{/* <p>{match.date}</p> */}
					</div>
				</a>
			</div>
			{/* </Link> */}
		</>
	);
}

export default Match;
