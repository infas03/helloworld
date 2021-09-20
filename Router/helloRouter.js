const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Hello = require("../Model/helloModel.js");

router.get("/view", (req, res) => {
    Hello.find()
        .then((hello) => res.json(hello))
        .catch((err) => res.status(404).json({ nohellofound: "No Hello found" }));
});

router.get("/view/:id", (req, res) => {
    Hello.findById(req.params.id)
        .then((hello) => res.json(hello))
        .catch((err) => res.status(404).json({ nohellofound: "No Hello found" }));
});

router.post("/insert", (req, res, next) => {
    const hello = new Hello({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email
    });
    hello
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "hello created"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
module.exports = router;