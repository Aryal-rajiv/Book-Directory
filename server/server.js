const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

DB_user = process.env.MONGO_USER;
DB_password = process.env.MONGO_PASSWORD;

mongoose.connect('mongodb+srv://DB_user:DB_password@rajivprojects.ktplpza.mongodb.net/?retryWrites=true&w=majority&appName=RajivProjects');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
