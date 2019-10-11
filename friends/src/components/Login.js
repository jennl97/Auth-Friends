import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {

//set local state here, pass username and password as empty strings to initialize
 const [credentials, setCredentials] = useState({
    username: '',
    password: ''
 });

//set up login event passing the custom axios call
    const login = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/friends');    
        })
        .catch(err => console.log(err))
    }
//set up our handle change, spread in the creditials state, which passes in the username & password variables. 
    const handleChange = (e) => {
       setCredentials({
           ...credentials,
           [e.target.name]: e.target.value
       })
    }
    
   return(
        <div>
          <div>
                <form onSubmit={login}>
                <input
                    component="input"
                    type="text"
                    name="username"
                    placeholder="User Name"
                    onChange={handleChange}
                    />
                <input
                    component="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                <button>Submit</button>
                </form>
        </div>
        </div>
    )
}


   


export default  Login;