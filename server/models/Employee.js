import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Employee = new Schema({
  user_id: {
    type: Number
  },
  employee_name: {
    type: String
  },
  time_in: {
    type: Date
  },
  time_out: {
    type: Date
  },
  active: {
    type: Boolean
  }
});

export default mongoose.model("Employee", Employee);
