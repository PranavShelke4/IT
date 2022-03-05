const router = require("express").Router();
let Pedology = require("../models/pedology.model");

router.route("/").get((req, res) => {
  Pedology.find()
    .then((pedologies) => res.json(pedologies))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const date = Date.parse(req.body.date);
  const activityName = req.body.activityName;
  const subject = req.body.subject;
  const groupNo = Number(req.body.groupNo);

  const newPedology = new Pedology({ date, activityName, subject, groupNo });

  newPedology
    .save()
    .then(() => res.json("Pedology added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Pedology.findById(req.params.id)
    .then((pedology) => res.json(pedology))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Pedology.findByIdAndDelete(req.params.id)
    .then((pedology) => res.json("Pedology deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Pedology.findById(req.params.id)
    .then((pedology) => {
      pedology.date = Date.parse(req.body.date);
      pedology.activityName = req.body.activityName;
      pedology.subject = req.body.subject;
      pedology.groupNo = Number(req.body.groupNo);

      pedology
        .save()
        .then(() => res.json("Pedology updated !"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
