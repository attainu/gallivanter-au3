const {Creator}  = require('../db/dbConfig')
module.exports = (sequelize, datatype) => {
    const BlogPostModel = sequelize.define('blogpost',{
        blogId: {
            type: datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: datatype.STRING,
            allowNull: false
        },
        cover: {
            type: datatype.STRING,
            defaultValue: "https://cdn.pixabay.com/photo/2017/10/23/05/56/holiday-2880261_960_720.jpg",
            
        },
        userId: {
            type: datatype.INTEGER,
            references:{
                model: Creator,
                key: 'id'
            },
            allowNull: false
        },
        body: {
            type: datatype.TEXT,
            allowNull: false
        }
    },{});
    return BlogPostModel;
}