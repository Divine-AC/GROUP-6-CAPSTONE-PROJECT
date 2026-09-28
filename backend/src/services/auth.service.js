import User from '../models/User.js';
import { generateToken } from '../utils/generateToken.js';

export const registerUserService = async (userData) => {
  const { name, email, password, role, companyName } = userData;

  // 1. Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error = new Error('User with this email already exists');
    error.statusCode = 409; // Conflict
    throw error;
  }

  // 2. Create User document
  const user = await User.create({
    name,
    email,
    password,
    role,
    companyName: role === 'employer' ? companyName : undefined,
  });

  // 3. Issue Token
  const token = generateToken(user._id, user.role);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      ...(user.role === 'employer' && { companyName: user.companyName }),
    },
    token,
  };
};

export const loginUserService = async (email, password) => {
  // 1. Find user and explicitly select password (since select: false is set in Schema)
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  // 2. Verify password match
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  // 3. Issue Token
  const token = generateToken(user._id, user.role);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      ...(user.role === 'employer' && { companyName: user.companyName }),
    },
    token,
  };
};

export const getCurrentUserService = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
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
