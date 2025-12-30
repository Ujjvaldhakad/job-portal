const express = require('express');
const router = express.Router();
const { registerUser, loginUser, userDelete, adminRegister, adminLogin, adminDelete } = require('../controllers/userauth.controller');

// user auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/delete', userDelete);

// admin auth routes
router.post('/admin/register', adminRegister);
router.post('/admin/login', adminLogin);
router.delete('/admin/delete', adminDelete);

module.exports = router;