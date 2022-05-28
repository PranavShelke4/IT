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

//Ghode Madam 
const ExercisesRouter = require("./routes/GhodeMadam/ExercisesRoutes");
const AchievementsRouter = require("./routes/GhodeMadam/AchievementsRoutes");
const StudymaterialsRouter = require("./routes/GhodeMadam/StudymaterialsRoutes");
const StudentlistsRouter = require("./routes/GhodeMadam/StudentlistsRoutes");
const DetentionlistsRouter = require("./routes/GhodeMadam/DetentionlistsRoutes");
const FeedbacklistsRouter = require('./routes/GhodeMadam/FeedbacklistsRoutes');

//Fafat Madam
const FafatExercisesRouter = require("./routes/FafatMadam/ExercisesRoutes");
const FafatAchievementsRouter = require("./routes/FafatMadam/AchievementsRoutes");
const FafatStudymaterialsRouter = require("./routes/FafatMadam/StudymaterialsRoutes");
const FafatStudentlistsRouter = require("./routes/FafatMadam/StudentlistsRoutes");
const FafatDetentionlistsRouter = require("./routes/FafatMadam/DetentionlistsRoutes");
const FafatFeedbacklistsRouter = require('./routes/FafatMadam/FeedbacklistsRoutes');

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database connection established successfully !!");
});


//Ghode Madam
app.use("/exercises", ExercisesRouter);
app.use("/achievements", AchievementsRouter);
app.use("/studymaterials", StudymaterialsRouter);
app.use("/studentlists", StudentlistsRouter);
app.use("/detentionlists", DetentionlistsRouter);
app.use('/feedbacklists', FeedbacklistsRouter);

//Fafat Madam
app.use("/Fafatexercises", FafatExercisesRouter);
app.use("/Fafatachievements", FafatAchievementsRouter);
app.use("/Fafatstudymaterials", FafatStudymaterialsRouter);
app.use("/Fafatstudentlists", FafatStudentlistsRouter);
app.use("/Fafatdetentionlists", FafatDetentionlistsRouter);
app.use('/Fafatfeedbacklists', FafatFeedbacklistsRouter);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
