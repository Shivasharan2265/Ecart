const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;