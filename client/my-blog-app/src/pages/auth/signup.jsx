import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ROUTES } from '../../constants';
import { UserContext } from '../../context/userContext';

const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(null);
    const { dispatchUser } = useContext(UserContext);
    const navigate = useNavigate();

    // Handle Input Change
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Handle Signup Logic
    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post(API_ROUTES.AUTH.REGISTER, form);
            const { token, user } = response.data;
            // Save data in localStorage and context
            localStorage.setItem('token', token);
            dispatchUser({ type: 'LOG_IN', payload: user });

            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSignup} className="space-y-4 max-w-md md:ml-auto w-full">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 outline-blue-600 focus:bg-transparent"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 outline-blue-600 focus:bg-transparent"
                        placeholder="Email Address"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleFormChange}
                        className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 outline-blue-600 focus:bg-transparent"
                        placeholder="Password"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleFormChange}
                        className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 outline-blue-600 focus:bg-transparent"
                        placeholder="Confirm Password"
                        required
                    />

                    <button
                        type="submit"
                        className="cursor-pointer w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
