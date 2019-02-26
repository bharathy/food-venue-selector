import React from 'react';

const PlaceToAvoid = ( {venues} ) => {
    return (<div className="flex-auto p10">
                <h4>Place to Avoid:</h4> 
                <ul>
                    {venues.map((venue, i) => <li className="p10" key={i}> { venue } </li>)}
                </ul>
            </div>
    )};

export default PlaceToAvoid;