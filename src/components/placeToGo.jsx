import React from 'react';

const PlaceToGo = ({ venues }) => {
    return (<div className="flex-auto p10 bdr-rt">
                <h4>Place to Go:</h4> 
                <ul>
                    {venues.map((venue, i) => <li className="p10" key={i}> { venue } </li>)}
                </ul>
            </div>
    )};

export default PlaceToGo;