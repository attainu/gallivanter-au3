const Sequelize = require('sequelize');
const db = require('../db/dbConfig');
const bcrypt = require('bcrypt');

const Creator = db.sequelize.define('creator', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: (Creator) => {
                Creator.password = bcrypt.hashSync(Creator.password,10)
            }
        }
    }
);
    Creator.associate = (models) => {
        Creator.hasMany(models.BlogPost,{
            foreignKey: "creatorId",
            as: "blogPosts",
            onDelete: 'CASCADE'
        });
    }
module.exports = Creator