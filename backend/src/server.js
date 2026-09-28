import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/db.js';

// Load environment variables
dotenv.config();

// Global Synchronous Error Handler
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

const PORT = process.env.PORT || 5000;

// Connect to Database first, then start Server
let server;
connectDB().then(() => {
  server = app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`,
    );
  });
});

// Global Async Promise Rejection Handler
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});
