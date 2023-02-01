const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: String, required: true },
});

const EmployeeModel = mongoose.model("employee", employeeSchema);

module.exports = EmployeeModel;