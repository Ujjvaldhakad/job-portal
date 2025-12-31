const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const userAuthRoute = require('./routes/authroutes/userauth.route');
const userOnboardRoute = require('./routes/userroutes/userOnboard.route');

const port = process.env.PORT;

// cors setup
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));


// express middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user', userAuthRoute);
app.use('/api/user', userOnboardRoute);


// server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// connect mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Mongo error:", err));
