import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { API_ROUTES } from "../constants";
import DOMPurify from 'dompurify';

const Post = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(API_ROUTES.BLOGS.GET_BY_ID(path));
                setPost(response.data);
            } catch (err) {
                setError(err.response?.data?.error || "Failed to fetch post");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [path]);

    if (loading) return <p className="text-center mt-10">Loading post...</p>;

    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-md mt-10">
            <img
                src={post?.featuredImage}
                alt="Blog Image"
                className="w-full h-64 object-cover mb-6 shadow-sm"
            />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
                <div className="text-right">

                    <a
                        href={`mailto:${post.author.email}`}
                        className="text-blue-500 hover:underline cursor-pointer text-sm"
                    >
                        {post.author.email}
                    </a>
                    <div className="flex justify-between">
                        <img src={post.author.avatar} alt={post.author.avatar} className="w-8 h-8 rounded-full" />
                        <h3 className="text-sm text-gray-500">By {post.author.name}</h3>
                    </div>

                </div>
            </div>
            <div className="flex">
                {post.tags.map((tag) => {
                    return <div className="p-2 text-xs font-semibold bg-blue-100 mx-2 my-2 ">
                        {tag}
                    </div>
                })}
            </div>
            <div
                className="prose prose-lg text-gray-700"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            ></div>
            <p className="text-gray-500 italic mt-6">{post?.longDesc}</p>
        </div>
    );
};

export default Post;