const User = require('../../models/user/userOnboard');

const userOnboard = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            website,
            qualification,
            language,
            job_Category,
            experience,
            Current_Salary,
            Expected_Salary,
            age,
            country,
            city,
            pincode,
            full_Address,
            description
        } = req.body;
        const user = await User.create({ name, email, phone, website, qualification, language, job_Category, experience, Current_Salary, Expected_Salary, age, country, city, pincode, full_Address, description });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { userOnboard }
