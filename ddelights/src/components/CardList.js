import React from 'react';
import Card from './Card';

//As long as you destructure here in the argument, you don't need to import it again,
//as you imported it in the index.js and added it as a prop for this component.
const CardList = ({ cakes }) => {
	const cardComponent = cakes.map((values, i) => {
		return (
			<Card 
				key={i} 
				image={cakes[i].image} 
				name={cakes[i].name} 
				price={cakes[i].price} 
			/>
		);
	})
	return(
		<div>
			{cardComponent}
		</div>
	);
}

export default CardList;