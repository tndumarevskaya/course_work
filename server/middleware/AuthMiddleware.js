const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next();
    }
    try {
        const jsonWebToken = req.headers.authorization.split(' ')[1];
        if (!jsonWebToken) {
            res.status(403).json({message: "You are not authorized"});
        }
        const decoded = jwt.verify(jsonWebToken, process.env.SECRET_TOKEN);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({message: "You are not authorized"});
    }
}