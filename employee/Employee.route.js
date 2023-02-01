const { Router } = require("express");
const EmployeeModel = require("./Employee.model");

const EmployeeRouter = Router();

EmployeeRouter.get("/employees", async (req, res) => {
  const employees = await EmployeeModel.find();
  res.send(employees);
});

EmployeeRouter.post("/employees", async (req, res) => {
    console.log(req.body);
    const employee = new EmployeeModel(req.body)
    employee.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "Something went wrong" });
    }
    console.log(success);
    return res.status(200).send({ message: "done" });
  });
});

module.exports = EmployeeRouter;
