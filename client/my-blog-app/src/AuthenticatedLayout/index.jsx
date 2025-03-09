import React, { useContext } from 'react';
import { Outlet, Navigate, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const AuthenticatedLayout = ({ user }) => {
    const { dispatchUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatchUser({ type: 'LOG_OUT' });
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-400 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between">
                    <a href='/' className="text-xl font-bold">JKTech Blog</a>
                    <div>
                        {user ? (
                            <ul className="flex items-center space-x-4">
                                <li>
                                    <img
                                        src={user.avatar || "https://plus.unsplash.com/premium_photo-1669078519241-0b251cbd4fc5?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                    />
                                </li>
                                <li className="text-md font-medium">{user.name}</li>
                                <li> {user && user.role != "user" && <Link to={'/create'} className='cursor-pointer bg-white text-gray-600 py-2 px-3 font-semibold'>Create Blog</Link>} </li>
                                <li className="cursor-pointer bg-red-400 font-semibold py-2 px-3" onClick={handleLogout}>Logout</li>

                            </ul>
                        ) : (
                            <Link to="/login" className="text-sm font-medium hover:text-blue-300">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            <div className="container mx-auto p-4">
                <Outlet />
            </div>
        </div>
    );
};

export const ProtectedRoute = ({ user, children }) => {
    if (!user || user.role !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AuthenticatedLayout;