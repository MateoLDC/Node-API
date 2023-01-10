const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb://localhost:27017/SnipApp",
  { useNewUrlParser: true, useUnifiedTopology: true, family: 4 },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
);
