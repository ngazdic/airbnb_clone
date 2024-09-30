import React from 'react';
import Logo from '../assets/airbnb-logo.png';

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg bg-none mb-5'>
			<a className='navbar-brand px-5' href='#'>
				<img src={Logo} alt='Airbnb Logo' />
			</a>
		</nav>
	);
}

export default Navbar;
