const jwt = require('jsonwebtoken');

const identifyUser = async (req, res, next) => {
  const token = req.cookies.user_login_token;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized access!',
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized access!',
    });
  }

  req.user = decoded;

  next();
};

module.exports = identifyUser;
