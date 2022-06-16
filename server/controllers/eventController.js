const {Event} = require('../models/models');
const ApiError = require('../error/ApiError');
const path = require('path');
const fs = require('fs');

class eventController {
    async create(req, res, next) {
        try {
            const {name, data, type, price, img} = req.body;    
            const event = await Event.create({name, data, type, price, img});
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