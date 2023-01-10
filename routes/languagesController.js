const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const { LanguagesModel } = require("../models/languagesModel");

router.get("/", (req, res) => {
  LanguagesModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data :" + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new LanguagesModel({
    name: req.body.name,
    slug: req.body.slug,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating new data : " + err);
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  const updateRecord = {
    name: req.body.name,
    slug: req.body.slug,
  };

  LanguagesModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update Error : " + err);
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  LanguagesModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
});

module.exports = router;
