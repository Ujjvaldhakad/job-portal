const User = require('../models/userauth');


const registerUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.query;
        const user = await User.create({ username, email, phone, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.query;

        // empty check
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        // find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // simple password match (NO hashing)
        if (user.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // success response
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { registerUser, loginUser };