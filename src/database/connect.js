const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@localhost:27017/barbershop`,
      {
        authSource: "admin",
      },
    );
    console.log("Database Connection Successful.");
  } catch (error) {
    console.log("Database Connection Error: ", error);
  }
};

module.exports = connectToDatabase;
