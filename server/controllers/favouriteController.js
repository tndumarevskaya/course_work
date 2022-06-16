const {Favourite} = require('../models/models');
const ApiError = require('../error/ApiError');

class favouriteController {
    async create(req, res) {
        const {userId} = req.body;
        const favourite = await Favourite.create({userId});
        const favourite_event = await Favourite.create
        return res.json(favourite);
    }

    async getAll(req, res) {
        const favourites = await Favourite.findAll();
        return res.json(favourites);
    }
}

module.exports = new favouriteController();