const Sequelize = require('sequelize');
const dotenv=require("dotenv");
dotenv.config();

const db ={}

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

db.sequelize = sequelize
db.Sequelize = Sequelize

//to create table automatically in psql
sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })
  .catch(error => console.log("DB error: ",error));

module.exports = db;