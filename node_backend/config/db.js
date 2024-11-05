import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on("connected", () =>
      console.log("db connected successfully")
    );
  } catch (error) {
    mongoose.connection.on("disconnected", () =>
      console.log("db disconnected")
    );
    console.error("Failed to connect to MongoDB", error);

    process.exit(1);
  }
};
