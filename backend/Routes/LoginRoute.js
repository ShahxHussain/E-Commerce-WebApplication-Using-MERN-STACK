import express from 'express';
import { loginUser } from '../controllers/LoginController.js';
// import { loginUser } from '../controllers/Login.js';

const router = express.Router();

router.post('/', loginUser);

export default router;

