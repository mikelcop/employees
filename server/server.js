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

const db_connection_string = `mongodb://localhost:27017/employees`;
const db_connection = process.env.DB_CONNECTION || db_connection_string;
mongoose.connect(db_connection);

const connection = mongoose.connection;

const connectionMessage = process.env.DB_CONNECTION
  ? "tru Internet "
  : " to local machine";

connection.once("open", () => {
  console.log(
    `MongoDB database connection ${connectionMessage} established successfully!`
  );
});

app.use("/api/employees", employeesRoutes);
app.use("/api/user", authRoutes);

app.listen(4000, () => console.log("Express server running on port 4000"));
