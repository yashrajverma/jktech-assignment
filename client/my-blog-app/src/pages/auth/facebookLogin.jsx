import React from 'react';

const FacebookLogin = () => {
    const handleFacebookLogin = () => {
        window.location.href = "http://localhost:5001/api/auth/facebook";
    };

    return (
        <div className="flex items-center justify-center hover:bg-blue-100">
            <button
                onClick={handleFacebookLogin}
                className="border border-gray-300 rounded-sm px-2 py-2 flex items-center cursor-pointer hover:bg-blue-100"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 512 512">
                    <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" />
                    <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" />
                </svg>
                <p className='ml-2 text-sm text-gray-600'>Sign in with Facebook</p>
            </button>
        </div>
    );
};

export default FacebookLogin;
