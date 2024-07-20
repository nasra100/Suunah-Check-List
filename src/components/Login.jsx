import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && username === storedUser.username && password === storedUser.password) {
            navigate('/app');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <section className=" sm:py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-sky-500 sm:text-4xl lg:text-5xl">Login to your account</h2>
                </div>

                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <div className="space-y-5">
                                <div>
                                    <label className="text-base font-medium text-gray-900">Your Name</label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900">Password</label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                        />
                                    </div>
                                </div>

                                {error && <p style={{ color: 'red' }}>{error}</p>}

                                <div>
                                    <button onClick={handleLogin} className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4 mb-4">
                            <p>Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
