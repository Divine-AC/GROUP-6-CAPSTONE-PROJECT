import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUserService = async (userData) => {
  const { name, email, password, role, companyName } = userData;

  const normalizedEmail = email?.trim().toLowerCase();

  if (!normalizedEmail) {
    const error = new Error("Email is required");
    error.statusCode = 400;
    throw error;
  }

  const allowedRoles = ["candidate", "employer"];

  if (role && !allowedRoles.includes(role)) {
    const error = new Error("Invalid registration role");
    error.statusCode = 400;
    throw error;
  }

  const userRole = role || "candidate";

  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    const error = new Error("User with this email already exists");
    error.statusCode = 409;
    throw error;
  }

  const user = await User.create({
    name,
    email: normalizedEmail,
    password,
    role: userRole,
    companyName: userRole === "employer" ? companyName : undefined,
  });

  const token = generateToken(user._id, user.role);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      ...(user.role === "employer" && {
        companyName: user.companyName,
      }),
    },
    token,
  };
};

export const loginUserService = async (email, password) => {
  const normalizedEmail = email?.trim().toLowerCase();

  const user = await User.findOne({ email: normalizedEmail }).select(
    "+password",
  );

  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const token = generateToken(user._id, user.role);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      ...(user.role === "employer" && {
        companyName: user.companyName,
      }),
    },
    token,
  };
};

export const getCurrentUserService = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};