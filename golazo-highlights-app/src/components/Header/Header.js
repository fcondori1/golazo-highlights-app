import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
	return (
		<>
			<nav className='navigation'>
				<div className='title1'>
				<h1 className='title2'>
					<Link to='/'>Golazo Highlights App</Link>
				</h1>
				</div>
				<ul>
					<li>
						<Link to='/recent'>Recent Matches</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Header;
