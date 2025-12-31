const User = require("../models/user/userauth");
const Admin = require("../models/admin/adminauth");

// user middleware
const userMiddleware = (req, res, next) => {
    try {
        const { email, password } = req.query;
        const user = User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// admin middleware
const adminMiddleware = (req, res, next) => {
    try {
        const { email, password } = req.query;
        const admin = Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        if (admin.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = { userMiddleware, adminMiddleware }