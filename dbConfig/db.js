import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
