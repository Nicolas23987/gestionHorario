
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.cookies['my_token']; // Obtener el token de la cookie

    if (!token) {
        return res.status(401).json({ status: false, message: 'No token provided' });
    }

    jwt.verify(token, 'secret', (err, user) => {
        if (err) {
            return res.status(403).json({ status: false, message: 'Token invalid' });
        }

        req.user = user; 
        next();
    });
};

module.exports = authMiddleware;
