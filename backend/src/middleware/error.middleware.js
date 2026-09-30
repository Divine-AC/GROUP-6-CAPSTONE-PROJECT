/**
 * Global Error Handling Middleware
 * Express recognizes this as an error handler because it has 4 parameters: (err, req, res, next)
 */
export const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // 1. Mongoose Duplicate Key Error (e.g., email already exists)
  if (err.code === 11000) {
    statusCode = 409; // Conflict
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    message = `Duplicate value entered for '${field}'. Please use another value.`;
  }

  // 2. Mongoose Invalid ObjectId (CastError)
  if (err.name === 'CastError') {
    statusCode = 400; // Bad Request
    message = `Invalid format for field '${err.path}'`;
  }

  // 3. Mongoose Schema Validation Error
  if (err.name === 'ValidationError') {
    statusCode = 400; // Bad Request
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
  }

  // 4. JWT Authentication Errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401; // Unauthorized
    message = 'Invalid token. Please log in again.';
  }
  if (err.name === 'TokenExpiredError') {
    statusCode = 401; // Unauthorized
    message = 'Your token has expired. Please log in again.';
  }

  // Standard API response format
  return res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
