import mongoose from "mongoose";

// Directly set the MongoDB connection string
const DB_URL = "mongodb+srv://Test_1:root@cluster-learn0.xv2eqgl.mongodb.net/myDatabase?retryWrites=true&w=majority";

const connection = () => {
  if (!DB_URL) {
    console.error("Database URL is not defined.");
    return;
  }

  mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with database", error.message);
  });
};

export default connection;
