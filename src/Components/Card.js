import React from 'react';

// For the cards to update, we need to make Card be able to accept parameters

const Card = (props) => { 
    const { name, email, id } = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

// the props have to be wrapped in { } because it is a JS function or else the props won't pass though 
// to randomize the robots, we can use the ID tag from robots.js - to pass that along we can use template strings from ES6 - wrap in {``} and then add the props.id in ${props.id}
// Destrusture the props at the top of the function - const { name, email, id } = props; - much cleaner 