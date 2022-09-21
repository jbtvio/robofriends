import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;

// how do we search? React has STATE and PROPS - State means the description of your application - STATE is able to change unlike props. 
// Props are simply things that come out of state. 
// Parent feeds state into a child component, child component receives the state it is now a property and it cannot be changed. 