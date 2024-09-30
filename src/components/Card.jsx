import React from 'react';

function Card(props) {
	let boxIcon;

	if (props.item.openSpots === 0) {
		boxIcon = 'SOLD OUT';
	} else if (props.item.location === 'Online') {
		boxIcon = 'ONLINE';
	}

	return (
		<section className='cardMain position-relative'>
			{boxIcon ? <p className='boxIcon position-absolute'>{boxIcon}</p> : null}
			<img
				className=' d-block'
				src={`/images/${props.item.coverImg}`} // Access coverImg from props.item
				alt='Katie'
				style={{ width: '180px' }} // Fix the style attribute
			/>
			<img src='/images/Star.png' alt='Star' />
			<p className='d-inline-block'>
				{props.item.stats.rating}
				<span className='text-muted'>
					({props.item.stats.reviewCount}) &#x2022; {props.item.location}
				</span>
			</p>
			<h3 className='fo'>{props.item.title}</h3>
			<p>
				<b>From ${props.item.price}</b> / person
			</p>
		</section>
	);
}

export default Card;
