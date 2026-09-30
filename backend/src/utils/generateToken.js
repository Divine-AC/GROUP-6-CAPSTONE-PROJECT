import jwt from 'jsonwebtoken';

/**
 * Generates a signed JWT access token.
 * @param {string} id - User ObjectId
 * @param {string} role - User role (candidate, employer, admin)
 * @returns {string} Signed JWT
 */
export const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
};
