import React, { useState } from 'react';
import { axiosWithAuth}  from '../utils/axiosWithAuth';
import Friends from './Friends';



const FriendsList = props => {
    //create local state
    const[friends, setFriends ] = useState([]);

    //pull data from server using custom axios call
    const friendsData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Friends go here</h2>
            <div>
               {setFriends.map(friend => (
                   <Friends />
               ))}
            </div>
        </div>
    )
}

export default FriendsList;