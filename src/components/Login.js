import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(credentials);
        setCredentials({
            username: '',
            password: '',
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {}
            </form>
        </div>
    );
};

export default Login;
