const job = require('../../models/jobs/jobs');


const jobController = async (req, res) => {
    try {
        const {
            title,
            jobCategory,
            jobType,
            offerdSalary,
            experience,
            qualification,
            gender,
            country,
            city,
            location,
            latitude,
            longitude,
            email,
            website,
            estimatedSalary,
            compliteAddress,
            description,
            startDate,
            endDate
        } = req.body;
        const createjob = await job.create({ title, jobCategory, jobType, offerdSalary, experience, qualification, gender, country, city, location, latitude, longitude, email, website, estimatedSalary, compliteAddress, description, startDate, endDate });
        res.status(201).json(createjob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getjobs = async (req, res) => {
    try {
        const getjob = await job.find();
        res.status(200).json(getjob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { jobController, getjobs };