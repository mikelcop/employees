const router = require("express").Router();
import Employee from "../models/Employee";

router.route("/").get((req, res) => {
  Employee.find((err, employees) => {
    if (err) console.log(err);
    else res.json(employees);
  });
});

router.route("/:id").get((req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) console.log(err);
    else res.json(employee);
  });
});

router.route("/add").post((req, res) => {
  let employee = new Employee(req.body);
  employee
    .save()
    .then(employee => {
      res.status(200).json({ employee: "Added successfully" });
    })
    .catch(err => {
      res.status(400).send("Failed to create new record");
    });
});

router.route("/update/:id").post((req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (!employee) return next(new Error("Could not load document"));
    else {
      employee.user_id = req.body.user_id;
      employee.employee_name = req.body.employee_name;
      employee.time_in = req.body.time_in;
      employee.time_out = req.body.time_out;
      employee.active = req.body.active;

      employee
        .save()
        .then(employee => {
          res.json("Update done");
        })
        .catch(err => {
          res.status(400).send("Update failed");
        });
    }
  });
});

router.route("/delete/:id").get((req, res) => {
  Employee.findByIdAndRemove({ _id: req.params.id }, (err, employee) => {
    if (err) res.json(err);
    else res.json("Remove successfully");
  });
});

module.exports = router;
