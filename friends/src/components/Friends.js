import React from 'react';

let Friends = props => {
    return(
        <div>
            <h4>Friend Name: {props.name}</h4>
            <p>Friend Age: {props.age}</p>
            <p>Friend Email: {props.email}</p>
        </div>
    )
}

export default Friends;