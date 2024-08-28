const mongoose = require('mongoose');

const isValidAuthToken = async (req, res, next, { userModel }) => {
  try {
    // Get user and user password models
    const UserPassword = mongoose.model(userModel + 'Password');
    const User = mongoose.model(userModel);

    // Bypass token validation for testing
    const token = req.cookies.token;

    // Logging token for testing purpose
    console.log(`Received token: ${token}`);

    // Assume the token is valid and get the first user as an example
    const user = await User.findOne({ removed: false });
    const userPassword = await UserPassword.findOne({ user: user._id, removed: false });

    if (!user || !userPassword) {
      return res.status(401).json({
        success: false,
        result: null,
        message: "User doesn't exist, authorization denied.",
        jwtExpired: true,
      });
    }

    // Bypass loggedSessions check for testing
    req[userModel.toLowerCase()] = user;

    // Proceed to the next middleware/route handler
    next();
  } catch (error) {
    return res.status(503).json({
      success: false,
      result: null,
      message: error.message,
      error: error,
      controller: 'isValidAuthToken',
    });
  }
};

module.exports = isValidAuthToken;
