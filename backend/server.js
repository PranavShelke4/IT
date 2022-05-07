const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));


const uri = process.env.ATLAS_URI;
const ExercisesRouter = require('./routes/ExercisesRoutes');




mongoose.connect(uri, { useNewUrlParser: true });

const connection= mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb database connection established successfully !!");
})



app.use('/exercises', ExercisesRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});