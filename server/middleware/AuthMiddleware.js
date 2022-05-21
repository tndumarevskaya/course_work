const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next();
    }
    try {
        const jsonWebToken = req.headers.authorization.split(' ')[1];
        if (!token) {
            res.status(403).json({message: "You are not authorized"});
        }
        const decoder = jws.verify(jsonWebToken, process.env.SECRET_TOKEN);
        req.user = decoder;
        next();
    } catch (e) {
        res.status(403).json({message: "You are not authorized"});
    }
}