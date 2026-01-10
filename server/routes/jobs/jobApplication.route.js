const express = require('express');
const router = express.Router();
const { jobApplication } = require('../../controllers/jobs/jobApplication.controller');

router.post('/jobApplication', jobApplication);

module.exports = router;
