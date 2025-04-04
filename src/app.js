import express from "express";
import todo from "./routes/todo.js";
import dotenv from "dotenv";
import connectDB from "./services/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("src/public"));

app.use("/", todo);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});