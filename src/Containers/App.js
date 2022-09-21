import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import '../Containers/App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users}));
       }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return !robots.length ?
                <h1 className='tc f1'>Loading</h1> :
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
        
                </div>    
    }
}

export default App;


// how do we search? React has STATE and PROPS - State means the description of your application - STATE is able to change unlike props. 
// Props are simply things that come out of state. 
// Parent feeds state into a child component, child component receives the state it is now a property and it cannot be changed. 
//  State is something that can change and effect our app - lives in the parent component
// this.setState is how we can update React