const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
    dob: String,
    gender: String,
    parmanentAddress: String,
    hometown: String,
    pincode: String,
    maritalStatus: String,
    passportNumber: String,
    description: String,
    country: String,
})

module.exports = mongoose.model("PersonalDetails", personalDetailsSchema);