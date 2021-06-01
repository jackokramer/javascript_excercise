const user = "<postgres user>"
const host = 'localhost'
const database = '<postgres db name>'
const password = '<postgres password>'
const port = '<postgres port>'

import {Sequilize, Model, Datatypes} from  'sequelize'

const sequelize = new Sequilize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
})

class Dog extends Model {}

Dog.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },{
        sequelize,
        modelName: 'dog',
        timestamps: false
})

Dog.findAll({
    attributes:[age]
})

const results = await Dog.findAll()

