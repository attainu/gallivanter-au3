const Sequelize = require('sequelize');
const CreatorModel = require('../models/CreatorModel');
const BlogPostModel = require('../models/BlogPostModel');
const CommentModel = require('../models/CommentModel');
const ImageModel = require('../models/ImageModel');
const dotenv=require("dotenv");
dotenv.config();


const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Creator = CreatorModel(sequelize,Sequelize);
const BlogPost = BlogPostModel(sequelize,Sequelize);
const Comment = CommentModel(sequelize,Sequelize);
const Image = ImageModel(sequelize,Sequelize);

BlogPost.belongsTo(Creator,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})
Creator.hasMany(BlogPost,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})
BlogPost.hasMany(Comment,{
  foreignKey: 'postId',
  onDelete: 'CASCADE'
})
Comment.belongsTo(BlogPost,{
  foreignKey: 'postId',
  onDelete: 'CASCADE'
})
BlogPost.hasOne(Image,{
  foreignKey: 'blogPostId',
  onDelete: 'CASCADE'
})
Image.belongsTo(BlogPost,{
  foreignKey: 'blogPostId',
  onDelete: 'CASCADE'
})
//to create table automatically in psql
sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })
  .catch(error => console.log("DB table error: ",error));
module.exports = {
  Creator,
  BlogPost,
  Comment,
  Image
};