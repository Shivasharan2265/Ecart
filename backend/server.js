const app = require("./app.js")
const dotenv = require("dotenv")
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/database.js")

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDB();

app.listen(PORT, () =>
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
);
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});