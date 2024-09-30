import React from 'react';

function Card() {
	return (
		<section className='cardMain px-5'>
			<img className='d-block' src='../public/images/Katie.png' alt='Katie' />
			<img src='../public/images/Star.png' alt='' />
			<p className='d-inline-block'>
				5.0 <span className='text-muted'>(6) &#x2022; USA</span>
			</p>
			<h3 className='fo'>Life lessons with Katie Zaferes</h3>
			<p>
				<span>From 136$</span> / person
			</p>
		</section>
	);
}

export default Card;
