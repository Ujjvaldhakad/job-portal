const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: Number,
    password: String,
},
    {
        timestamps: true
    });

module.exports = mongoose.model("UserAuth", userAuthSchema);
