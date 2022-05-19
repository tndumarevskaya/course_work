const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Favourite = sequelize.define('favourite', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const FavouriteEvent = sequelize.define('favourite_event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    data: {type: DataTypes.STRING, allowNull: false},
    isFree: {type: DataTypes.BOOLEAN},
    isOnline: {type: DataTypes.BOOLEAN},
    price: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})


const Place = sequelize.define('place', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

User.hasOne(Favourite);
Favourite.belongsTo(User);

Favourite.hasMany(FavouriteEvent);
FavouriteEvent.belongsTo(Favourite);

Event.hasOne(FavouriteEvent);
FavouriteEvent.belongsTo(Event);

Type.hasMany(Event);
Event.belongsTo(Type);

Place.hasMany(Event);
Event.belongsTo(Place);

module.exports = {
    User, Favourite, FavouriteEvent, Event, Type, Place
}