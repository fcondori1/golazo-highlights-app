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
			<button className='scorebat' onClick="location.href='https://www.scorebat.com/video-api/'">
				ScoreBat
			</button>
		</div>
	);
}

export default About;
