const mongoose = require("mongoose");

const userOnboardSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    website: String,
    qualification: String,
    language: String,
    job_Category: String,
    experience: String,
    Current_Salary: String,
    Expected_Salary: String,
    age: String,
    country: String,
    city: String,
    pincode: {
        type: Number,
        trim: true,
    },
    full_Address: String,
    description: String,
},
    {
        timestamps: true
    })


module.exports = mongoose.model("UserOnboard", userOnboardSchema);