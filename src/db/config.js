import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect");
  } catch (err) {
    console.log(err);
  }
};

const client = new MongoClient(process.env.MONGODB_URI);
const clientPromise = client.connect();

export default clientPromise;
