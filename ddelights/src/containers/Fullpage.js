import React, { Component } from 'react';
import CardList from '../components/CardList';
import { cakes } from '../cakes';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import Calendar from '../components/Calendar';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';



class Fullpage extends Component {
  constructor() {
    super()
    this.state = {
      //put here what we want our state to be
      cakes: cakes,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }
  

  render() {
    const filteredCakes = this.state.cakes.filter(cake => {
      return cake.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      
    })

    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };

    
    return(
      <div className ='tc'>
        <SectionsContainer className="container" {...options}>
          <Section>
            <h1 className = 'f-headline'>D's Delights</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
          </Section>
          <Section>
            <CardList cakes={filteredCakes}/>
          </Section>
          <Section>
            <Calendar />
          </Section>
        </SectionsContainer>
      </div>
    
    );
  }
}


export default Fullpage;