const jobApplications = require('../../models/jobs/jobApplication');

const jobApplication = async (req, res) => {
    try {
        const {
            candidateId,
            jobId,
            companyId,
            status,
            appliedAt,
            resume,
            message } = req.body
        const createJobApplication = await jobApplications.create({ candidateId, jobId, companyId, status, appliedAt, resume, message })
        res.status(201).json(createJobApplication)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { jobApplication }