import React from 'react';

const Scroll = (props) => {
	return(
	<div style={{ overflowY: 'scroll', height: '1000px' }}>
		{props.children}
	</div>
	);
}
// When using CSS directly (inline) in React we must use double curly brackets to put inline.
export default Scroll;