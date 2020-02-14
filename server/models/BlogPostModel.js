const Sequelize = require('sequelize');
const db = require('../db/dbConfig');
const Creator = require('../models/CreatorModel');
const BlogPost = db.sequelize.define('blogpost',{
    blogId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    creatorId: {
        type: Sequelize.INTEGER,
        references:{
            model: Creator,
            key: 'id'
        },
        allowNull: false
    },
    likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
},{});
BlogPost.associate = (models) => {
    BlogPost.hasMany(models.Comment,{
        foreignKey: 'postId',
        as: 'comment',
        onDelete: 'CASCADE'
    });
    BlogPost.belongsTo(models.Creator,{
        foreignKey: 'creatorId',
        as: 'creator',
        onDelete: 'CASCADE'
    })
    
}
module.exports = BlogPost