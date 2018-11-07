import React, { Component } from 'react';
import CardList from '../components/CardList';
import { cakes } from '../cakes';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'
import Calendar from '../components/Calendar';


class App extends Component {
	constructor() {
		super()
		this.state = {
			//put here what we want our state to be
			cakes: cakes,
			searchfield: '',
		}
	}

	onSearchChange = (event) => {
		// must use = (event) => arrow function when created own method in a component 
		// (not prebuilt) in React
		this.setState({ searchfield: event.target.value})
		// .setState is used when you want to change the state of something in React
		// here we are telling React that we want the state of searchfield to be 
		// the value of the event.

	}
	// Because this is within App, it can be passed down to a child component.
	// That child still must use this. to access it, but it can access a function
	// created here as this function is within the parent.


	render() {
		const filteredCakes = this.state.cakes.filter(cake => {
			return cake.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			//if anything in the searchfield (lowercase) is included in cakes list, filter it
		})
		// .target.value will give us the actual value of the search field, rather than a full 
		// object.
		return(
			<div className ='tc'>
				<h1 className = 'f-headline'>D's Delights</h1>
				<Calendar />
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList cakes={filteredCakes}/>
				</Scroll>
			</div>
		// Because we put the cakes object above in the state, we can now just call it
		// here with this.state.cakes, it's saying I want the 'cakes' object from 'state'
		// to be given to CardList, which CardList then uses to display the cakes information.

		// 'Cakes' is accessed within CardList as a prop. Even though we are taking it from a
		// state, once it is passed down, it needs to be given as a prop, becuase it is the
		//child of App, and cannot change.

		// Because we put the const filteredCakes within the render, we can use it as a prop
		// for Cardlist to make it run the filteredCakes which is linked to SearchBox through
		// searchfield now.
		);
	}
}

// can decontruct searchfield and cakes as a const at the start (after the render) make it 
// =this.state  then we dont need to this.state everywhere in the render, and can just put
// cakes or searchfield
export default App;