const Feedbacklists = require("../models/feedbacklist.model");

exports.postFeedbacklist = (req, res) => {
  console.log("Post Req ------------------->>>>>>");
  console.log(req.body);
  const date = req.body.date;
  const description = req.body.description;
  const link = req.body.link;

  const newFeedbacklist = new Feedbacklists({ date, description, link });

  newFeedbacklist
    .save()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => res.status(400).json({ msg: "Error" }));
};

exports.getFeedbacklists = (req, res) => {
    Feedbacklists.find()
    .then((feedbacklists) => res.json(feedbacklists))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getFeedbacklistById = (req, res) => {
  console.log("hello");
  console.log(req.params.id);
  Feedbacklists.findById(req.params.id)
    .then((feedbacklist) => res.json(feedbacklist))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteFeedbacklists = (req, res) => {
  console.log(req.params.id);
  Feedbacklists.findByIdAndDelete(req.params.id)
    .then((feedbacklist) => res.json("feedback List deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateFeedbacklist = (req, res) => {
  console.log("update");
  if(req.params.id !=null){
    Feedbacklists.findOneAndUpdate(
        { _id: req.params.id },
        {
            _id: req.params.id ,
            date: req.body.date,
            description: req.body.description,
            link: req.body.link
            
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
