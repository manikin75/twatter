import mongoose from "mongoose";
import dontenv from "dotenv";
dontenv.config();

const URL =
  process.env.MONGODB_URI; // || "mongodb://localhost:27017/subspace";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbConnection = mongoose
  .connect(URL, options)
  .then((result) => {
    console.log("Database connection is success.");
    console.log(URL);

  })
  .catch((err) => console.log(err));

export default dbConnection;
