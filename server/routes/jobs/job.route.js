const express = require('express');
const router = express.Router();
const { jobController } = require('../../controllers/jobs/job.controller');

// job routes
router.post('/job', jobController);

module.exports = router;
