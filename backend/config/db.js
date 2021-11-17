import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://aianow:black669@product-config.pgtoe.mongodb.net/addressTutorial?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error when connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
