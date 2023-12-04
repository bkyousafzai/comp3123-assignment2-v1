import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(newUser);
        setNewUser({
            username: '',
            password: '',
            email: '',
        });
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                {}
            </form>
        </div>
    );
};

export default Signup;
