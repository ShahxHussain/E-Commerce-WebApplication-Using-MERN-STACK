// controllers/Signup.js
import SignupModel from '../models/Signup.js';

export const addSignup = async (req, res) => {
  try {
    const { fname, lname, email, pass, confirmpass } = req.body;
    const newSignup = new SignupModel({ fname, lname, email, pass, confirmpass, });

    const token = newSignup.generateAuthToken();
    const savedSignup = await newSignup.save();

    res.json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ success: false, message: 'Error signing up' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SignupModel.findByIdAndDelete(id);

    if (result) {
      res.json({ response: true });
    }
    else {
      res.json({ response: false });
    }
  } catch (error) {
    console.log(error);

  }
}  