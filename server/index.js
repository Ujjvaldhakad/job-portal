const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const userAuthRoute = require('./routes/authroutes/userauth.route');
const userOnboardRoute = require('./routes/userroutes/userOnboard.route');
const jobRoute = require('./routes/jobs/job.route');
const companyRoute = require('./routes/company/company.route');
const jobApplicationRoute = require('./routes/jobs/jobApplication.route');
const userResumeRoute = require('./routes/userroutes/userResume.route');

const port = process.env.PORT;

// cors setup
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://job-portal-s2oi-33nbr2bfs-ujjval-dhakads-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));



// express middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user', userAuthRoute);
app.use('/api/user', userOnboardRoute);
// job routes
app.use('/api/jobs', jobRoute);

// company routes
app.use('/api/company', companyRoute);

// job application routes
app.use('/api/jobs', jobApplicationRoute);

// user resume routes
app.use('/api/user', userResumeRoute);

// server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// connect mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Mongo error:", err));
