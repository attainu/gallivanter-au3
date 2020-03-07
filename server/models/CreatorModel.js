const bcrypt = require('bcrypt');
module.exports = (sequelize, datatype) => {
    const CreatorModel = sequelize.define('creator',{
        id: {
            type: datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          firstName: {
              type: datatype.STRING,
              allowNull: false
          },
          lastName: {
              type: datatype.STRING
          },
          email: {
              type: datatype.STRING,
              allowNull: false,
              unique: true
          },
          password: {
              type: datatype.STRING,
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
  return CreatorModel;
}