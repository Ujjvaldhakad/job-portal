const User = require('../../server/models/user/userOnboard');

const userOnboardingMiddleware = (req, res, next) => {
    try {
        const { phone, age } = req.body;
        if (!phone || phone.length !== 10) {
            return res.status(400).json({ message: "Phone number must be 10 digits" });
        }
        if (age < 18 || age > 60) {
            return res.status(400).json({ message: "Age must be between 18 and 60" });
        };
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = { userOnboardingMiddleware };
