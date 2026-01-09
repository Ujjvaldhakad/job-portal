const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    photo: String,
    banner: String,
    name: String,
    phone: Number,
    email: String,
    website: String,
    teamSize: Number,
    estSince: String,
    description: String,
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model("Company", companySchema);