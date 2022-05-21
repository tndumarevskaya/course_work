const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/AuthMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/authorization', authMiddleware, userController.authorization);

module.exports = router;