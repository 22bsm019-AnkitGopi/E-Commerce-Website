import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect("mongodb+srv://ankitg4402:Xbetwxvz36ynBaWp@cluster0.1hdhbup.mongodb.net/");
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
