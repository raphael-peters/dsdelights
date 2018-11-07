import React from 'react';

const SearchBox = ({ searchChange }) => {
	return(
		<div className ='pa2'>
			<input 
			className = 'pa3 ba b--white bg-light-yellow'
			type='search' 
			placeholder='Search Cakes'
			onChange={searchChange}
			/>
		</div>
		)
}

export default SearchBox;