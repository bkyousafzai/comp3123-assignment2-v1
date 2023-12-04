import React, { useState, useEffect } from 'react';

const UpdateEmployee = ({ employee, onUpdateEmployee }) => {
    const [updatedEmployee, setUpdatedEmployee] = useState({ ...employee });

    useEffect(() => {
        setUpdatedEmployee({ ...employee });
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEmployee({ ...updatedEmployee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateEmployee(updatedEmployee);
    };

    return (
        <div>
            <h2>Update Employee</h2>
            <form onSubmit={handleSubmit}>
                {}
            </form>
        </div>
    );
};

export default UpdateEmployee;
