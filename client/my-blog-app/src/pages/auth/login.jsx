import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleAuth from './googleLogin';
import { API_ROUTES } from '../../constants';
import { UserContext } from '../../context/userContext';
import FacebookLogin from './facebookLogin';

const Login = () => {
    const [form, setForm] = useState({ password: '', email: '' });
    const [error, setError] = useState(null);
    const { dispatchUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (!name || !value) return;
        setForm({ ...form, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatchUser({ type: 'LOADING' });
        try {
            const response = await axios.post(API_ROUTES.AUTH.LOGIN, form);
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            dispatchUser({ type: 'LOG_IN', payload: user });
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to login. Please try again.');
            dispatchUser({ type: 'ERROR' });
        }
    };

    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="flex items-center gap-10 max-w-6xl max-md:max-w-md w-full">
                    <div>
                        <img src="https://images.unsplash.com/photo-1523635252177-cedd4a1502c7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <form className="max-w-md md:ml-auto w-full" onSubmit={handleLogin}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-8">Sign in</h3>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <div className="space-y-4">
                            <div>
                                <input onChange={handleFormChange} name="email" type="email" autoComplete="email" required className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent" placeholder="Email address" />
                            </div>
                            <div>
                                <input name="password" type="password" autocomplete="current-password" required className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent" placeholder="Password" />
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label for="remember-me" className="ml-3 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link to='/register' className="text-blue-600 hover:text-blue-500 font-semibold">
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="!mt-8">
                            <button type="submit" className="cursor-pointer w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Log in
                            </button>
                        </div>

                        <div className="my-4 flex items-center gap-4">
                            <hr className="w-full border-gray-300" />
                            <p className="text-sm text-gray-800 text-center">or</p>
                            <hr className="w-full border-gray-300" />
                        </div>

                        <div className="space-x-6 flex justify-center">
                            <GoogleAuth />
                            <FacebookLogin />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;