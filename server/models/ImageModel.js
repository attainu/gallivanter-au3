const {BlogPost} = require('../db/dbConfig');
module.exports = (sequelize, datatype) => {
    const ImageModel = sequelize.define('image', {
        imageId: {
            type: datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imageName: {
            type: datatype.STRING,
            allowNull: false
        },
        cloudImage:{
            type: datatype.STRING,
            allowNull: false
        },
        blogPostId:{
            type: datatype.INTEGER,
            references:{
                model: BlogPost,
                key: 'blogId'
            },
            allowNull: false
        }
    },{});
    return ImageModel
}