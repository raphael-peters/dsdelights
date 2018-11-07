import React from 'react';
import './Card.css';

//descrturcturing the props right inside the brackets (the argument), so we can use instantly.
const Card = ({ image, name, price }) => {
	return (
		<div className='dib pa3 ma2 grow bw2'>
			<img alt= 'Cake' src={image} />
			<div>
				<h2>{name}</h2>
				<p>{price}</p>
			</div>
		</div>
		);

}	

export default Card