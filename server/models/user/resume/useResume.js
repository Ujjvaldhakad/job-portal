const mongoose = require('mongoose');

const userResumeSchema = new mongoose.Schema({
    title: String,
    skills: String,
    employmentType: String,
    education: String,
    itSkills: String,
    project: String,
    resumeFile: String,
    onlineProfile: [
        {
            name: { type: String, required: true },
            url: { type: String, required: true },
            description: { type: String, required: false }
        }
    ],
    workSample: [
        {
            title: { type: String, required: true },
            url: { type: String, required: true },
            duration: { type: String, required: true },
            description: { type: String, required: true },
        }
    ],
    whitePaper: [
        {
            title: { type: String, required: true },
            url: { type: String, required: true },
            publishedDate: { type: Date, required: true },
            description: { type: String, required: true },
        }
    ],
    presentation: [
        {
            socailProfile: String,
            url: String,
            description: String
        }
    ],
    Certification: [
        {
            certificateName: String,
            certificatebody: String,
            yearOnlabel: String,
        }
    ],
    patent: [
        {
            title: String,
            url: String,
            patentOffice: String,
            applicationNumber: String,
            patentDate: String,
            status: String,
            publishedDate: String,
            description: String,

        }
    ],
    profileSummary: String
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("UserResume", userResumeSchema);
