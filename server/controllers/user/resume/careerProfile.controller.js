const careerProfile = require('../../../models/user/resume/careerProfile');

const careerProfileController = async (req, res) => {
    try {
        const { industry, department, role, jobType, employmentType, preferredShift, availableFor, expectedSalary, desiredLocation, desiredIndustry } = req.body;

        const createCareerProfile = await careerProfile.create({ industry, department, role, jobType, employmentType, preferredShift, availableFor, expectedSalary, desiredLocation, desiredIndustry });
        res.status(201).json(createCareerProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { careerProfileController }