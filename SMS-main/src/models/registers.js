import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Confirmpassword: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  secondname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Register", studentSchema)

