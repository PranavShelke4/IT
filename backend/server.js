const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;

const ExercisesRouter = require("./routes/ExercisesRoutes");
const AchievementsRouter = require("./routes/AchievementsRoutes");
const StudymaterialsRouter = require("./routes/StudymaterialsRoutes");
const StudentlistsRouter = require("./routes/StudentlistsRoutes");
const DetentionlistsRouter = require("./routes/DetentionlistsRoutes");
const FeedbacklistsRouter = require('./routes/FeedbacklistsRoutes');

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database connection established successfully !!");
});

app.use("/exercises", ExercisesRouter);
app.use("/achievements", AchievementsRouter);
app.use("/studymaterials", StudymaterialsRouter);
app.use("/studentlists", StudentlistsRouter);
app.use("/detentionlists", DetentionlistsRouter);
app.use('/feedbacklists', FeedbacklistsRouter);

//Login

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res)=> {
  const { email, password} = req.body
  User.findOn({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

app.post("/register", (req, res) => {
  const { fname, lname, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd with this gmail" });
    } else {
      const user = new User({
        fname,
        lname,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
});


app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
