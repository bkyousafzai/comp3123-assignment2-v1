import React from 'react';

const EmployeeDetails = ({ employee }) => {
    return (
        <div>
            <h2>Employee Details</h2>
            {employee ? (
                <div>
                    <p><strong>First Name:</strong> {employee.firstname}</p>
                    <p><strong>Last Name:</strong> {employee.lastname}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Gender:</strong> {employee.gender}</p>
                    <p><strong>Salary:</strong> {employee.salary}</p>
                </div>
            ) : (
                <p>No employee selected</p>
            )}
        </div>
    );
};

export default EmployeeDetails;
