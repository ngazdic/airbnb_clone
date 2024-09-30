import React from 'react';
import MainImg from '../images/mainImage.png';

function Main() {
	return (
		<main>
			<div className='text-center'>
				<img src={MainImg} alt='Main image' />
			</div>
			<div className='px-5'>
				<h3>Online Experiences</h3>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</main>
	);
}

export default Main;
