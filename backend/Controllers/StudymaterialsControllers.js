const Studymaterials = require("../models/studymaterial.model");

exports.postStudymaterial = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const date = req.body.date;
  const activity = req.body.activity;
  const subject = req.body.subject;
  const group = Number(req.body.group);

  const newStudymaterial = new Studymaterials({ date, activity, subject, group });

  newStudymaterial
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getStudymaterials = (req, res) => {
  Studymaterials.find()
    .then((studymaterials) => res.json(studymaterials))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getStudymaterialById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Studymaterials.findById(req.params.id)
    .then((studymaterial) => res.json(studymaterial))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteStudymaterials = (req, res) => {
  console.log(req.params.id);
  Studymaterials.findByIdAndDelete(req.params.id)
    .then((studymaterial) => res.json("Material deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateStudymaterial = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Studymaterials.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            date: req.body.date,
            activity: req.body.activity,
            subject: req.body.subject,
            group: req.body.group,
          },(error,data)=>{
              if(error){
                  console.log(error);
                //   res.json(error);
              }else{
                  console.log(data);
                //   res.json(data);
              }
          }
      );
  }else{
      console.log("Id null")
  }
  
};
