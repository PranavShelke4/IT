const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));


const uri = process.env.ATLAS_URI;


const ExercisesRouter = require('./routes/ExercisesRoutes');
const AchievementsRouter = require('./routes/AchievementsRoutes');
const StudymaterialsRouter = require('./routes/StudymaterialsRoutes');
const StudentlistsRouter = require('./routes/StudentlistsRoutes');
const DetentionlistsRouter = require('./routes/DetentionlistsRoutes');
const FeedbacklistsRouter = require('./routes/FeedbacklistsRoutes');

mongoose.connect(uri, { useNewUrlParser: true });

const connection= mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb database connection established successfully !!");
})



app.use('/exercises', ExercisesRouter);
app.use('/achievements', AchievementsRouter);
app.use('/studymaterials', StudymaterialsRouter);
app.use('/studentlists', StudentlistsRouter);
app.use('/detentionlists', DetentionlistsRouter);
app.use('/feedbacklists', FeedbacklistsRouter);

app.listen(5000, () => {
    console.log(`Server is running on port`);
});