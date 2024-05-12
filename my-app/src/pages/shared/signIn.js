import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpeg';
import './signIn.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/Slices/userSlice';
import { Navigate } from 'react-router-dom';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHidden, setIsHidden] = useState(true);
    const dispatch = useDispatch();

    const handleShow = () => {
        setIsHidden(!isHidden);
    };


    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {
            email: email,
            password: password
        };

        try {
            const res = await fetch(`http://localhost:4000/users?email=${credentials.email}&password=${credentials.password}`);
            const data = await res.json();
            if (data.length > 0) {
                console.log(data[0]);
                dispatch(setUser(data[0]));
                return <Navigate to='/' />;
            } else {
                console.log('error credentials');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='login w-screen h-screen flex justify-center items-center'>
            <div className='bg-ensas w-11/12 h-4/6 bg-white border-1 border-cyan-950 rounded-xl p-10'>
                <div className='mt-20 bg-white w-login h-login rounded-xl p-10 border'>
                    <div className='flex items-center mb-5'>
                        <img src={logo} alt="Logo-ensa" className='w-20 m-1 p-2' />
                        <h1 className='text-center font-bold text-3xl font-mono'>SIGN IN</h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='input-style' placeholder='Email' />
                        <div className='relative flex'>
                            <input type={isHidden ? 'password' : 'text'} name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input-style' placeholder='Mot de passe' />
                            <i className={`fa-regular ${isHidden ? 'fa-eye' : 'fa-eye-slash'} text-xl  absolute top-3 right-2 cursor-pointer`} onClick={handleShow}></i>
                        </div>
                        <div className='btn flex justify-center mt-10'>
                            <button type='submit' className='bg-cyan-950 text-white py-2 px-4 rounded-xl block font-mono'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
