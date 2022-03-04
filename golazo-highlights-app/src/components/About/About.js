import React from 'react';
import './About.css';

function About(props) {
	return (
		<div className='about-page'>
			<h2>About</h2>
			<p className='info'>
				All information retired from the site can be accessed by the ScoreBat
				site. Golazo uses the ScoreBat API but does not own any of the material
				included.
			</p>
			<p className='info'>
				All videos used are supplied by ScoreBat and Youtube
			</p>
			<a href='https://www.scorebat.com/video-api/' target='_blank' className='btn'>
				ScoreBat
			</a>
		</div>
	);
}

export default About;
