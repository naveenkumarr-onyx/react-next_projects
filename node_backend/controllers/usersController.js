import bcrypt from "bcrypt";
import Signup from "../models/signup.js";

export const signupController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new Signup({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
