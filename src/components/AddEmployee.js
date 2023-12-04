import React, { useState } from 'react';

const AddEmployee = ({ onAddEmployee }) => {
    const [employee, setEmployee] = useState({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        salary: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEmployee(employee);
        setEmployee({
            firstname: '',
            lastname: '',
            email: '',
            gender: '',
            salary: 0,
        });
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstname" value={employee.firstname} onChange={handleChange} required />
                </label>
                <br />

                <label>
                    Last Name:
                    <input type="text" name="lastname" value={employee.lastname} onChange={handleChange} required />
                </label>
                <br />

                <label>
                    Email:
                    <input type="email" name="email" value={employee.email} onChange={handleChange} required />
                </label>
                <br />

                <label>
                    Gender:
                    <select name="gender" value={employee.gender} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />

                <label>
                    Salary:
                    <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
                </label>
                <br />

                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
