import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
    
             </div>
        );    
    }
}


export default App;


// how do we search? React has STATE and PROPS - State means the description of your application - STATE is able to change unlike props. 
// Props are simply things that come out of state. 
// Parent feeds state into a child component, child component receives the state it is now a property and it cannot be changed. 
//  State is something that can change and effect our app - lives in the parent component
// this.setState is how we can update React