import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route";
import employeesRoutes from "./routes/employees.route";
import verify from "./routes/verifyToken";

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* 
  Enable this if you have monggo database installed and running on local machine
*/
//mongoose.connect("mongodb://localhost:27017/employees");

/* 
  Enable this if dont have Mongodb in local machine.  Just make sure you have internet connection
*/
mongoose.connect(
  "mongodb://devuser1:password1@ds347367.mlab.com:47367/employee_record"
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

app.use("/api/employees", employeesRoutes);
app.use("/api/user", authRoutes);

app.listen(4000, () => console.log("Express server running on port 4000"));
