const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: String,
    jobCategory: String,
    jobType: String,
    offerdSalary: String,
    experience: String,
    qualification: String,
    gender: String,
    country: String,
    city: String,
    location: String,
    latitude: String,
    longitude: String,
    email: String,
    website: String,
    estimatedSalary: String,
    compliteAddress: String,
    description: String,
    startDate: String,
    endDate: String,
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Job", jobSchema);