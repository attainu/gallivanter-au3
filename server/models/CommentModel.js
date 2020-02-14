const Sequelize = require('sequelize');
const db = require('../db/dbConfig');
const BlogPost = require('../models/BlogPostModel');
const Comment = db.sequelize.define('comment',{
    commentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false  
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    blogPostId: {
        type: Sequelize.INTEGER,
        references: {
            model: BlogPost,
            key: 'blogId'
        },
        allowNull: false
    }

},{});
Comment.associate = (models) => {
    Comment.belongsTo(models.BlogPost,{
        foreignKey: 'blogPostId',
        as: 'blog',
        onDelete: 'CASCADE'
    })
}
module.exports = Comment