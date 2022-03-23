const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute= require('./routes/user');

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(()=> console.log("DB Connected"))
.catch((err) => {console.log(err)});

app.get("/api/user", userRoute);

app.listen(process.env.PORT|| 4000, () => {
    console.log("BackEND SERVER Online");
});