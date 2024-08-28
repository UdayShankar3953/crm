const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authUser = async (req, res, { user, databasePassword, password, UserPasswordModel }) => {
  // Check if email is correct
  if (!user) {
    return res.status(403).json({
      success: false,
      result: null,
      message: 'Invalid email.',
    });
  }

  // Check if password is correct
  const isMatch = await bcrypt.compare(databasePassword.salt + password, databasePassword.password);

  if (!isMatch) {
    return res.status(403).json({
      success: false,
      result: null,
      message: 'Invalid credentials.',
    });
  }

  // Simplified token generation for testing
  const token = "dummy_token"; // Replace with a static token for testing

  res
    .status(200)
    .cookie('token', token, {
      maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      domain: 'https://crm-frontend-7345.onrender.com', // Adjust the domain as necessary
      path: '/',
      Partitioned: true,
    })
    .json({
      success: true,
      result: {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        role: user.role,
        email: user.email,
        photo: user.photo,
      },
      message: 'Successfully login user',
    });
};

module.exports = authUser;
