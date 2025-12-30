const mongoose = require("mongoose");

const adminAuthSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: Number,
    password: String
},
    {
        timestamps: true
    });

module.exports = mongoose.model("AdminAuth", adminAuthSchema);
