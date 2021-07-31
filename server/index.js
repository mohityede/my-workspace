import express from 'express';
const app = express();

import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

mongoose.connect("mongodb://localhost:27017/workspacedb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(() => console.log("mongodb database connected succesfully..."))
    .catch((err) => console.log("error during connection with DB"))

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 7700;

app.get('/', (req, res) => {
    res.send("Hello this is backend...")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})