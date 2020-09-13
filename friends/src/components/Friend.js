import React from 'react';
import FriendForm from './FriendForm';

const Friend = (props) => {
    return(
        <div className='friend-list'>
            <h1>Friends</h1>
            <FriendForm/>
            {props.friends.map((friends) => (
                <div>
                    <p>Name: {friends.name}</p>
                    <p>Age: {friends.age}</p>
                    <p>Email: {friends.email}</p>
                </div>
            ))}
        </div>
    )
};

export default Friend;