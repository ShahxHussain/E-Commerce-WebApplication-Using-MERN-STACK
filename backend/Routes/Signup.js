import express from 'express';
import { addSignup, deleteUser } from '../controllers/Signup.js';


const router = express.Router();

router.post('/', addSignup);
router.delete('/:id',deleteUser);

export default router;

// // Signup.js
// import express from 'express';
// import SignupModel from '../models/Signup.js';

// const router = express.Router();

// router.post('/', async (req, res) => {
//   try {
//     const { fname, lname, email, pass, confirmpass } = req.body;

//     const newSignup = new SignupModel({
//       fname,
//       lname,
//       email,
//       pass,
//       confirmpass,
//     });

//     const savedSignup = await newSignup.save();

//     res.json({ success: true, message: 'Signup successful' });
//   } catch (error) {
//     console.error('Error signing up:', error);
//     res.status(500).json({ success: false, message: 'Error signing up' });
//   }
// });

// export default router;
