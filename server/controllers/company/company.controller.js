const company = require('../../models/company/company');

const companyController = async (req, res) => {
    try {
        const { name, phone, email, website, teamSize, estSince, description } = req.body;
        const createcompany = await company.create({ name, phone, email, website, teamSize, estSince, description });
        res.status(201).json(createcompany);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { companyController };