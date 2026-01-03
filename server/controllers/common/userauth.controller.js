const User = require('../../models/user/userauth');
const Admin = require('../../models/admin/adminauth');
const jwt = require('jsonwebtoken');

// user register
const registerUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({ username, email, phone, password });
        res.status(201).json(user);
    } catch (error) {
        console.error("Error in registerUser:", error);
        res.status(500).json({ error: error.message });
    }
}

// user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

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

        // generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '48h' });

        // success response
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//user delete
const userDelete = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// admin register
const adminRegister = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const admin = await Admin.create({ username, email, phone, password });
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // empty check
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        // find admin
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // simple password match (NO hashing)
        if (admin.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // success response
        res.status(200).json({
            message: "Login successful",
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// admin delete
const adminDelete = async (req, res) => {
    try {
        const { id } = req.body;
        const admin = await Admin.findByIdAndDelete(id);
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// export all user auth functions
module.exports = { registerUser, loginUser, userDelete, adminRegister, adminLogin, adminDelete };