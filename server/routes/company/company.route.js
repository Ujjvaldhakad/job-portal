const express = require('express');
const router = express.Router();
const { companyController } = require('../../controllers/company/company.controller');

router.post('/company', companyController);

module.exports = router;
