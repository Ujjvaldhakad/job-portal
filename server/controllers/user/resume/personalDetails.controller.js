const personalDetails = require('../../../models/user/resume/personalDetails');

const personalDetailsController = async (req, res) => {
    try {
        const { dob, gender, parmanentAddress, hometown, pincode, maritalStatus, passportNumber, description, country } = req.body;
        const createPersonalDetails = await personalDetails.create({ dob, gender, parmanentAddress, hometown, pincode, maritalStatus, passportNumber, description, country });
        res.status(201).json(createPersonalDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { personalDetailsController }