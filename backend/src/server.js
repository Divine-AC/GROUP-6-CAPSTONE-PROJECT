import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 7000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
