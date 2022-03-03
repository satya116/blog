const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database is connected successfully...");
  } catch (error) {
    console.log("Error: " + error.message);
    process.exit(1);
  }
};

module.exports = connectDB;