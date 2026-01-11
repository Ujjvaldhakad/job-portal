const express = require('express');
const router = express.Router();
const { jobController, getjobs } = require('../../controllers/jobs/job.controller');

// job routes
router.post('/job', jobController);

// get jobs
router.get('/jobs', getjobs);

module.exports = router;
