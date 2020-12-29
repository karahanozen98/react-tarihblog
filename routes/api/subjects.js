const router = require("express").Router();
let Subject = require("../../models/subject_Model.js");

router.route("/").get((req, res) => {
  Subject.find()
    .then((subjects) => res.json(subjects))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const category = req.body.category;
  const title = req.body.title;
  const url = req.body.url;
  const text = req.body.text;
  const date = req.body.date;

  const newSubject = new Subject({ category, title, url, text, date });

  newSubject
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Subject.findById(req.params.id)
    .then((subject) => res.json(subject))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Subject.findByIdAndDelete(req.params.id)
    .then(() => res.json("Subject deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("update/:id").post((req, res) => {
  Subject.findById(req.params.id)
    .then((subject) => {
      subject.category = req.body.category;
      subject.title = req.body.title;
      subject.url = req.body.url;
      subject.text = req.body.text;
      subject.date = req.body.date;
      subject
        .save()
        .then(() => res.json("Subject updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
