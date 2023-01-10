const express = require("express");
const app = express();
require("./models/dbConfig");
const languagesRoutes = require("./routes/languagesController");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const cors = require("cors");

// mongoose.set("useFindAndModify", false); // if you have a deprecationWarning of Mongoose for 'findOneAndUpdate()' or 'finOneAndDelete()'
app.use(bodyParser.json());
app.use(cors({ origin: "http://127.0.0.1:5500/index.html" }));
app.use("/languages", languagesRoutes);

app.listen(3000, () => console.log("Server started : 3000"));
