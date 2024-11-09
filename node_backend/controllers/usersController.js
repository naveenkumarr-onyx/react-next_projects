import bcrypt from "bcrypt";
import Signup from "../models/signup.js";

export const signupController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new Signup({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Successful response
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
      success: true,
    });
  } catch (error) {
    // Catch and handle server errors
    res.status(500).json({
      message: "Server error. Please try again later.",
      error: error.message,
      success: false,
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Signup.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found." });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials.", success: false });
    } else {
      return res.status(200).json({
        message: "Logged in successfully",
        success: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error. Please try again later.",
      error: error.message,
      success: false,
    });
  }
};
