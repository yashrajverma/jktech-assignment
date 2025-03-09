import React, { memo, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { API_ROUTES } from '../constants';
import BlogCard from '../components/Card';
import { UserContext } from '../context/userContext';
import { Link } from 'react-router-dom';

const BlogList = ({ user }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(API_ROUTES.BLOGS.GET_ALL);
                setBlogs(response.data);
            } catch (err) {
                setError(err.response?.data?.error || 'Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading blogs...</p>;

    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {blogs?.length > 0 ? (
                    blogs.map((blog) => <BlogCard key={blog._id} post={blog} />)
                ) : (
                    <p className="text-center col-span-full text-2xl font-bold">
                        <img className='w-xl m-auto'
                            src="https://plus.unsplash.com/premium_vector-1736769534684-bca027073e57?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="No BLogs Found" />
                        No blogs found</p>
                )}
            </div>
        </div>

    );
};

export default memo(BlogList);