const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Favourite} = require('../models/models');

class UserController {
    async registration(req, res, next) {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        const {email, password} = req.body;
        if (!email || !password || !re.test(email)) {
            return next(ApiError.badRequest("Incorrect password or email"));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest("User has already exist"))
        }
        const hashPassword = await bcrypt.hash(password, 4);
        const user = await User.create({email, password: hashPassword});
        const favourite = await Favourite.create({userId: user.id});
        const jsonWebToken = jwt.sign({id: user.id, email: user.email}, process.env.SECRET_TOKEN, {expiresIn: '24h'});

        return res.json({jsonWebToken});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.badRequest("User not found"));
        }
        let isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            return next(ApiError.badRequest("Incorrect password"));
        }
        const jsonWebToken = jwt.sign({id: user.id, email: user.email}, process.env.SECRET_TOKEN, {expiresIn: '24h'});

        return res.json({jsonWebToken});
    }

    async authorization(req, res, next) {
        const jsonWebToken = generateJws(req.user.id, req.user.email);
        return res.json({jsonWebToken});
    }

}

module.exports = new UserController();