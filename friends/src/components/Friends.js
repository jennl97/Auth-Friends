import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Friends = () => {
    getFriends = () => {
        axiosWithAuth()
            .get('/data')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }
    return(
        <div>

        </div>
    )
}

export default Friends;