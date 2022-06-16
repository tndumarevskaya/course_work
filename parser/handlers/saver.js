const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'nn_events',
    'postgres',
    'Tanya2009-1', 
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    data: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
})

module.exports = async function (data) {
    await sequelize.authenticate();
    await sequelize.sync();
    for (const initialData of data) {
        const event = await Event.create({name: initialData.title, type: initialData.type, data: initialData.data, price: initialData.price, img: initialData.img});
    }
}