const uuid = require('uuid');
const {Event} = require('../models/models');
const ApiError = require('../error/ApiError');
const path = require('path');

class eventController {
    async create(req, res, next) {
        try {
            const {name, data, placeId, typeId, isFree, isOnline, price} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, "..", "images", fileName));

            const event = await Event.create({name, data, placeId, typeId, isFree, isOnline, price, img: fileName});

            return res.json(event);
        } catch (e) {
            next(ApiError.badRequest(e.message));   
        }
        
    }

    async getAll(req, res) {
        const {placeId, typeId} = req.query;
        let events;
        if(!placeId && !typeId) {
            events = await Event.findAll();
        } else if (placeId && !typeId) {
            events = await Event.findAll({where:{placeId}});
        } else if (!placeId && typeId) {
            events = await Event.findAll({where:{typeId}});
        } else if (placeId && typeId) {
            events = await Event.findAll({where:{placeId, typeId}});    
        }

        return res.json(events);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const event = await Event.findOne({
            where: {id}, 
        })
        return res.json(event);
    }
}

module.exports = new eventController();