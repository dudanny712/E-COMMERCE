const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute= require('./routes/userRoute');
const authRoute= require('./routes/auth');
const productRoute= require('./routes/productRoute');
const cartRoute= require('./routes/cartRoute');
const orderRoute = require("./routes/orderRoute");
const stripeRoute = require("./routes/stripeRoute");
const cors = require("cors");
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(()=> console.log("DB Connected"))
.catch((err) => {console.log(err)});

app.use(cors());
app.use(express.json());
// Route
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT|| 5000, () => {
    console.log("BackEND SERVER Online");
});