import React, { } from 'react';
import { } from '../../contexts/Context/ContextProvider';

const Login = () => {

    const loginHandle = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
    }
    return (
        <div className=' text-left mx-auto bg-secondary w-fit p-20 rounded-xl'>
            <h2 className='text-2xl my-4'>Please login</h2>
            <form onSubmit={loginHandle}>
            <div className='my-4'>
                <label htmlFor='inputEmail'>Email</label><br/>
                <input name='email' type="email" placeholder="Enter your Email" className='p-2 rounded-lg' required></input>
            </div>
                <div className='my-4'>
                 <label htmlFor='inputPassword'>Password</label><br/>
                <input name='password' type="password" placeholder="Enter your Password" className='p-2 rounded-lg' required></input>   
                </div>
                <div>
                    <button className='btn btn-primary' type='submit'>Log In</button>
                </div>

            </form>
        </div>
    );
};

export default Login;