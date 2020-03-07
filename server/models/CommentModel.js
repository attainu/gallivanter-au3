const { BlogPost } = require("../db/dbConfig");
module.exports = (sequelize, datatype) => {
  const CommentModel = sequelize.define(
    "comment",
    {
      commentId: {
        type: datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: datatype.STRING,
        allowNull: false
      },
      email: {
        type: datatype.STRING,
        allowNull: false
      },
      message: {
        type: datatype.TEXT,
        allowNull: false
      },
      postId: {
        type: datatype.INTEGER,
        references: {
          model: BlogPost,
          key: "blogId"
        },
        allowNull: false
      }
    },
    {}
  );

  return CommentModel;
};
