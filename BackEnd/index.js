const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(()=> console.log("DB Connected"))
.catch((err) => {console.log(err)});


app.listen(process.env.PORT|| 4000, () => {
    console.log("BackEND SERVER Online");
});