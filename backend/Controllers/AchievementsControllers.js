const Achievements = require("../models/achievement.model");

exports.postAchievement = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const date = req.body.date;
  const activity = req.body.activity;
  const subject = req.body.subject;
  const group = Number(req.body.group);

  
  const newAchievement = new Achievements({ date, activity, subject, group });

  newAchievement
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getAchievements = (req, res) => {
  Achievements.find()
    .then((achievements) => res.json(achievements))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAchievementById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Achievements.findById(req.params.id)
    .then((achievement) => res.json(achievement))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteAchievements = (req, res) => {
  console.log(req.params.id);
  Achievements.findByIdAndDelete(req.params.id)
    .then((achievement) => res.json("Achievement deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateAchievement = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Achievements.findOneAndUpdate(
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
