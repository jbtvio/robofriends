import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((_user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            />
                    )
                })
            }
        </div>
    );
}

export default CardList;

// Using a map of the array and the i index - we can autopopulate from the robot list based on the different properties of the robot page.
// cardComponent has to be wrapped {} since it is JS
// we need to add a key to the array to help the virtualDOM keep track of where/what everything is. It needs a unique key. 