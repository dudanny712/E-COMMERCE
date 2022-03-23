const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute= require('./routes/userRoute');
const authenticationRoute= require('./routes/authRoute');

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(()=> console.log("DB Connected"))
.catch((err) => {console.log(err)});


app.use(express.json());
// Route
app.use("/api/auth", authenticationRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT|| 4000, () => {
    console.log("BackEND SERVER Online");
});