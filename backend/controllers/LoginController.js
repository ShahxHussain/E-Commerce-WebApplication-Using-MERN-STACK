import SignupModel from '../models/Signup.js';

export const loginUser = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await SignupModel.findOne({ email });

    if (user && user.pass === pass) {
      const token = await user.generateAuthToken();
      console.log("TOKEN PART IS: " + token);
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
};
