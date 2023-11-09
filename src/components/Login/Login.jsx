import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        setError('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const from = location.state?.from?.pathname || "/";

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='text-error'>{error}</p>
            <p><small>New To Ema-John? <Link to="/sign-up">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;