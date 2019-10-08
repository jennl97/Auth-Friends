import React, { useState, useEffect } from 'react';
// import { Form, Field, withFormik } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {

 const [credentials, setCredentials] = useState({});

    const login = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/login', credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleChange = e => {
        setCredentials: {
            credentials: {[e.target.name] = e.target.value}
            
        }
    }
    
   return(
        <div>
          <div>
                <form onSubmit={login}>
                <input
                    component="input"
                    type="text"
                    name="userName"
                    value={credentials.userName}
                    placeholder="User Name"
                    onChange={handleChange}
                    />
                <input
                    component="input"
                    type="password"
                    name="password"
                    value={credentials.password}
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