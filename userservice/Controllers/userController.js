const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const { secret, expiresIn } = require("../utils/jwt");
const validator = require("validator");

// controller for registering the user

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !email || !password || !lastName) {
      return res.json({
        message: "please send complete details",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        message: "not an email",
      });
    }
    if (firstName.length < 3) {
      return res.json({
        message: "firstName must be minimum of thre characters",
      });
    }
    if (lastName.length < 3) {
      return res.json({
        message: "lastName must be minimum of thre characters",
      });
    }
    if (password.length < 8) {
      return res.json({
        message: "password must be of min 8 characters",
      });
    }
    const isEmailExists = await User.findOne({ where: { email } });
    if (isEmailExists)
      return res.json({
        message: "email already exists",
      });
    const salt = await bcrypt.genSalt(7);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    
    return res.status(201).json(
      { 
        message: "User registered!", 
        details:user });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
   const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user.id }, secret, { expiresIn });
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// controller for getting the user details

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({
      id:user.id,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      createdaAt:user.createdAt,
      updatedAt:user.updatedAt
  });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
