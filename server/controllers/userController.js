const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Favourite} = require('../models/models');

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("incorrect password or email"));
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

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('id is undefined'));
        }
        res.json(id);
    }

}

module.exports = new UserController();