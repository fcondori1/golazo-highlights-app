import React from 'react';
import './About.css';

function About(props) {
	return (
		<div className='about-page animate__animated animate__zoomIn'>
			<h2>About</h2>
			<p className='info'>
				Ever just need to relax and catch up on the latest football(soccer)
				matches? The Golazo highlghts app allows you to browse the most recent
				games and stay on top of the league tables using ScoreBat. All
				information retrieved from the site can be accessed from ScoreBat.
				Golazo uses the ScoreBat API but does not own any of the material
				included.
			</p>
			<p className='info'>
				All videos used are supplied by ScoreBat and Youtube
			</p>
			<a
				href='https://www.scorebat.com/video-api/'
				target='_blank'
				className='btn'>
				ScoreBat
			</a>
		</div>
	);
}

export default About;
