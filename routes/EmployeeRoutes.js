const express = require('express');
const employeeModel = require('../models/Employee');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Get all employees
app.get('/api/emp/employees', async (req, res) => {
    const employees = await employeeModel.find({});

    try {
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new employee
app.post('/api/emp/employee', async (req, res) => {
    const employee = new employeeModel(req.body);

    try {
        await employee.save();
        res.status(201).send({
            created_employee: employee
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get employee by ID
app.get('/api/emp/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findById(req.params.id);
        res.status(200).send({
            retrieved_employee: employee
        });
    } catch (err) {
        res.status(500).send({
            "status": false, "message": err.message
        });
    }
});

// Update employee by ID
app.put('/api/emp/employee/:id', async (req, res) => {
    try {
        await employeeModel.findByIdAndUpdate(req.params.id, req.body);
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete employee by ID
app.delete('/api/emp/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findByIdAndDelete(req.params.id);
        res.status(204).send({
            "status": true, deleted_employee: employee
        });
        if (!employee)
            res.status(404).send("No item found");
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;
