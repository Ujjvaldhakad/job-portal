const userResume = require('../../../models/user/resume/userResume');

const userResumeController = async (req, res) => {
    try {
        const {
            title,
            skills,
            employmentType,
            education,
            itSkills,
            project,
            resumeFile,
            onlineProfile,
            workSample,
            whitePaper,
            presentation,
            Certification,
            patent,
            profileSummary } = req.body;

        const createUserResume = await userResume.create({ title, skills, employmentType, education, itSkills, project, resumeFile, onlineProfile, workSample, whitePaper, presentation, Certification, patent, profileSummary });
        res.status(201).json(createUserResume);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { userResumeController }
