const mongoose = require('mongoose');

const careerProfileSchema = new mongoose.Schema({
    industry: String,
    department: String,
    role: String,
    jobType: String,
    employmentType: String,
    preferredShift: String,
    availableFor: String,
    expectedSalary: String,
    desiredLocation: String,
    desiredIndustry: String,
})

module.exports = mongoose.model("CareerProfile", careerProfileSchema);
