import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
  },
  password: {
    type: String,
    required: true,
  },
});

const Signup = mongoose.model("User", signupSchema);

export default Signup;
