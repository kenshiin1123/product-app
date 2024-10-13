import mongoose from "mongoose";

export default function db() {
  mongoose.connect(process.env.MONGO_URI);
  mongoose.connection.on("error", console.error.bind("Connection Error"));
  mongoose.connection.once("open", () => {
    console.log("Mongodb Connected!");
  });
}
