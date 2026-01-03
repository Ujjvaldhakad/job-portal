const mongoose = require("mongoose");

const userOnboardSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserAuth",     // 🔗 CONNECTION
            required: true,
            unique: true
        },

        name: String,
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
        pincode: Number,
        full_Address: String,
        description: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("UserOnboard", userOnboardSchema);
