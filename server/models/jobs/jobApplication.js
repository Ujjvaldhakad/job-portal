const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    candidateId: String,
    jobId: String,
    companyId: String,
    status: String,
    appliedAt: String,
    resume: String,
    message: String
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("jobApplications", jobApplicationSchema);


