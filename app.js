const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();

//middlewares
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
