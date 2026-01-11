const express = require("express");
const router = express.Router();

const { userResumeController } = require("../../controllers/user/resume/userResume.controller");
const { personalDetailsController } = require("../../controllers/user/resume/personalDetails.controller");
const { careerProfileController } = require("../../controllers/user/resume/careerProfile.controller");

// User Resume Routes
//1. User Resume
router.post("/userResume", userResumeController);
//2. Personal Details
router.post("/personalDetails", personalDetailsController);
//3. Career Profile
router.post("/careerProfile", careerProfileController);

module.exports = router;