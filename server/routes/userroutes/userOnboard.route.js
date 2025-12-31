const express = require('express');
const router = express.Router();
const { userOnboard } = require('../../controllers/user/userOnboard.controller');
const { userOnboardingMiddleware } = require('../../middlewares/userOnboard.middleware');

// user onboard routes
router.post('/userOnboard', userOnboardingMiddleware, userOnboard);

module.exports = router;