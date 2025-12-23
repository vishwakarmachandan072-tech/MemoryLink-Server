//External Module
import express from 'express';

//Local Module
import { postLogin, postRegister } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', postRegister);
router.post('/login', postLogin)

export default router;