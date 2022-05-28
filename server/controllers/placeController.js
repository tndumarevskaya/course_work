const {Place} = require('../models/models');
const ApiError = require('../error/ApiError');

class placeController {
    async create(req, res) {
        const {name} = req.body;
        const place = await Place.create({name});
        return res.json(place);
    }

    async getAll(req, res) {
        const places = await Place.findAll();
        return res.json(places);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const place = await Place.findOne({
            where: {id}, 
        })
        return res.json(event);
    }
}

module.exports = new placeController();