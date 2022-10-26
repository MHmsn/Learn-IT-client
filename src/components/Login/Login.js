import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AllContext } from '../../contexts/Context/ContextProvider';

const Login = () => {
    const {signIn} = useContext(AllContext)
    const navigate = useNavigate();

    const loginHandle = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
            
        })
        .catch(e => console.error(e));
        
    }
    return (
        <div className=' text-left mx-auto bg-secondary w-2/5 p-20 rounded-xl'>
            <h2 className='text-2xl my-4'>Please login</h2>
            <form onSubmit={loginHandle}>
            <div className='my-4'>
                <label htmlFor='inputEmail'>Email</label><br/>
                <input name='email' type="email" placeholder="Enter your Email" className='p-2 rounded-lg w-full' required></input>
            </div>
                <div className='my-4'>
                 <label htmlFor='inputPassword'>Password</label><br/>
                <input name='password' type="password" placeholder="Enter your Password" className='p-2 rounded-lg w-full' required></input>   
                </div>
                <div>
                    <button className='btn btn-primary' type='submit'>Log In</button>
                </div>
                <div className='mt-4'>
                    New to this website? <Link to='/register' className='underline'>Register here</Link>

                </div>
            </form>
        </div>
    );
};

export default Login;