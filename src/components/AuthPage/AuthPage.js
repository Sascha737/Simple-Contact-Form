import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = ({ mode }) => {
    const [notice, setNotice] = useState('');
    const isSignUp = mode === 'signup';

    const handleSubmit = (event) => {
        event.preventDefault();
        // Keep the demo honest until an authentication service is connected.
        setNotice('Authentication is not connected yet.');
    };

    return (
        <section className="container auth-container">
            <h1>{isSignUp ? 'Create your account' : 'Log in'}</h1>
            <form onSubmit={handleSubmit}>
                {isSignUp && (
                    <label>
                        Name
                        <input type="text" name="name" autoComplete="name" required />
                    </label>
                )}
                <label>
                    Email
                    <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        autoComplete={isSignUp ? 'new-password' : 'current-password'}
                        required
                    />
                </label>
                <button type="submit">{isSignUp ? 'Create account' : 'Log in'}</button>
            </form>
            {notice && (
                <p className="auth-notice" role="status">
                    {notice}
                </p>
            )}
            <p className="auth-switch">
                {isSignUp ? 'Already have an account? ' : 'New here? '}
                <Link to={isSignUp ? '/login' : '/signup'}>
                    {isSignUp ? 'Log in' : 'Sign up'}
                </Link>
            </p>
        </section>
    );
};

export default AuthPage;