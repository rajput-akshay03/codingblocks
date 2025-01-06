const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  //  console.log(req.headers.authorization);
  const token = req.headers.authorization; 

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = { id: decoded.id, email: decoded.email }; 
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
