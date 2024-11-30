import {Router} from 'express'
import validate from '../../middleware/validate.js';
import UserController from '../controllers/UserController.js';
import {registerValidation} from '../../validations/UserValidation.js'
import {loginValidation} from '../../validations/UserValidation.js'

const router = Router();

router.post('/register', registerValidation, validate, UserController.register);
router.post('/verify-email', UserController.verifyEmail);
router.post('/login', loginValidation, UserController.login);
router.post('/forgotpassword', UserController.forgetPassword);

export default router;