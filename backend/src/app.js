import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import Route Handlers
import authRoutes from './routes/auth.routes.js';

// Import Custom Error Middleware
import { errorHandler } from './middleware/error.middleware.js';

dotenv.config();

const app = express();

// Global Express Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// Unhandled Route Handler (404)
app.all('*', (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on this server!`);
  error.statusCode = 404;
  next(error);
});

// Mount Centralized Error Middleware (Must be AFTER all routes)
app.use(errorHandler);

export default app;
