import React, {useState} from 'react';
import {axiosWithAuth} from '../util/axiosWAuth';

const FriendForm = (props) => {
    const [state, setState] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = (e) => {
        console.log(state)
        setState({
            ...state, [e.target.name]: e.target.value,
        });

    function addFriendSubmit(e) {
            axiosWithAuth()
                .post('http://localhost:5000/api/friends', state)
                .then((res) => {
                    console.log(state);
                    setState([...state, res]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <form onSubmit='addFriendSubmit()'>
            <label>Name</label>
            <input
                type= 'text'
                name= 'name'
                id= 'name'
                onChange={handleChanges}
                value= {state.name}
            />

            <label>Age</label>
            <input
                type= 'text'
                name= 'age'
                id= 'age'
                onChange= {handleChanges}
                value= {state.age}
            />

            <label>Email</label>
            <input
                type= 'text'
                name= 'age'
                id= 'age'
                onChange= {handleChanges}
                value={state.email}
            />
            <button type='submit'>Add Friend</button>
        </form>
    );
};
export default FriendForm;