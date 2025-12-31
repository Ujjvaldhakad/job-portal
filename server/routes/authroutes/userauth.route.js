const express = require('express');
const router = express.Router();
const { registerUser, loginUser, userDelete, adminRegister, adminLogin, adminDelete } = require('../../controllers/common/userauth.controller');
const { userMiddleware, adminMiddleware } = require('../../middlewares/auth.middleware')

// user auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/delete', userMiddleware, userDelete);

// admin auth routes
router.post('/admin/register', adminMiddleware, adminRegister);
router.post('/admin/login', adminMiddleware, adminLogin);
router.delete('/admin/delete', adminMiddleware, adminDelete);

module.exports = router;