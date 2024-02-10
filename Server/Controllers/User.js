const jwt = require("jsonwebtoken");
const User = require("../Modals/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = 16;

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All input fields are require (name , email and password )",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already existed with this email",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email . Please enter correct email.",
      });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newInstance = new User({
      name,
      email,
      password: hashPassword,
    });

    const savedUser = await newInstance.save();
    res.status(201).json({
      success: true,
      message: "New User Created Successfully",
      User: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in creating new User ${error}`,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No User found",
      });
    }

    const correctPassword = await bcrypt.compare(user.password, password);
    if (correctPassword) {
      return res.status(422).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    user.token = token;
    const savedUser = await user.save();
    res.cookie("userToken", token, {
      expires: new Date(Date.now() + 100000 * 6),
      httpOnly: true,
    });

    res.status(200).json({ success: true, User: savedUser });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: `Failed to login ${error}` });
  }
};

const checkAuthentication = async (req, res) => {
  try {
    const { token } = req.cookies.userToken;

    if (!token) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Unauthorized access - No token provided",
        });
    }

    await jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, message: "Unauthorized access" });
      } else {
        const user = await User.findOne(decoded.userId);
        if (!user) {
          return res.status(400).json({success : false , message : "No user matched!"});
        }

        res.status(200).json({success : true , User : user});
      }
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: `Unauthorized access ${error}` });
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkAuthentication,
};
